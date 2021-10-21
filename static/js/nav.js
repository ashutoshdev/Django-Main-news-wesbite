// mobile menu init
function initMobileNav() {
    var html = jQuery('html');
    var body = jQuery('body');
    var hiddenClass = 'fixed-html';
    var win = jQuery(window);
    var scrollTop = 0;

    jQuery('body').mobileNav({
        menuActiveClass: 'nav-active',
        menuOpener: '.nav-opener',
        onShow: function() {
            showNav();
            jQuery(document).on("click","body",overlayClick);
        },
        onHide: function() {
            jQuery(document).off( "click","body",overlayClick );
            hideNav();
        }
    });

    function overlayClick(event) {
        if (
            event &&
            typeof( event.target ) !== "undefined" &&
            typeof( event.target.tagName ) !== "undefined" &&
            ( event.target.tagName == "FOOTER" || event.target.tagName == "MAIN" )
        ) {
            jQuery(".nav-opener.close").click();
        }
    }

    function showNav() {
        if (jQuery(document).height() > win.height()) {
            scrollTop = (html.scrollTop()) ? html.scrollTop() : body.scrollTop();
            html.addClass(hiddenClass).css('top', -scrollTop);
        }
    }
    function hideNav() {
        html.removeClass(hiddenClass);
        jQuery('html, body').scrollTop(scrollTop);
    }
}
/*
 * Simple Mobile Navigation
 */
jQuery(document).ready(function () {
    function MobileNav(options) {
        this.options = $.extend({
            container: null,
            hideOnClickOutside: false,
            menuActiveClass: 'nav-active',
            menuOpener: '.nav-opener',
            menuDrop: '.nav-drop',
            toggleEvent: 'click',
            outsideClickEvent: 'click touchstart pointerdown MSPointerDown'
        }, options);
        this.initStructure();
        this.attachEvents();
    }
    MobileNav.prototype = {
        initStructure: function() {
            this.page = $('html');
            this.container = $(this.options.container);
            this.opener = this.container.find(this.options.menuOpener);
            this.drop = this.container.find(this.options.menuDrop);
        },
        attachEvents: function() {
            var self = this;

            if(activateResizeHandler) {
                activateResizeHandler();
                activateResizeHandler = null;
            }

            this.outsideClickHandler = function(e) {
                if(self.isOpened()) {
                    var target = $(e.target);
                    if(!target.closest(self.opener).length && !target.closest(self.drop).length) {
                        self.hide();
                    }
                }
            };

            this.openerClickHandler = function(e) {
                e.preventDefault();
                self.toggle();
            };

            this.opener.on(this.options.toggleEvent, this.openerClickHandler);
        },
        isOpened: function() {
            return this.container.hasClass(this.options.menuActiveClass);
        },
        show: function() {
            this.container.addClass(this.options.menuActiveClass);
            if(this.options.hideOnClickOutside) {
                this.page.on(this.options.outsideClickEvent, this.outsideClickHandler);
            }

            this.makeCallback('onShow', this);
        },
        hide: function() {
            this.container.removeClass(this.options.menuActiveClass);
            if(this.options.hideOnClickOutside) {
                this.page.off(this.options.outsideClickEvent, this.outsideClickHandler);
            }

            this.makeCallback('onHide', this);
        },
        toggle: function() {
            if(this.isOpened()) {
                this.hide();
            } else {
                this.show();
            }
        },
        makeCallback: function(name) {
            if(typeof this.options[name] === 'function') {
                var args = Array.prototype.slice.call(arguments);
                args.shift();
                this.options[name].apply(this, args);
            }
        },
        destroy: function() {
            this.container.removeClass(this.options.menuActiveClass);
            this.opener.off(this.options.toggleEvent, this.clickHandler);
            this.page.off(this.options.outsideClickEvent, this.outsideClickHandler);
        }
    };

    var activateResizeHandler = function() {
        var win = $(window),
            doc = $('html'),
            resizeClass = 'resize-active',
            flag, timer;
        var removeClassHandler = function() {
            flag = false;
            doc.removeClass(resizeClass);
        };
        var resizeHandler = function() {
            if(!flag) {
                flag = true;
                doc.addClass(resizeClass);
            }
            clearTimeout(timer);
            timer = setTimeout(removeClassHandler, 500);
        };
        win.on('resize orientationchange', resizeHandler);
    };

    $.fn.mobileNav = function(options) {
        return this.each(function() {
            var params = $.extend({}, options, {container: this}),
                instance = new MobileNav(params);
            $.data(this, 'MobileNav', instance);
        });
    };
});