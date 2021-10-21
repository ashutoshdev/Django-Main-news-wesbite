/**
 * Theme functions file
 */
(function ($) {
	'use strict';

	var $document = $(document);
	var $window = $(window);


	/**
	* Document ready (jQuery)
	*/
	$(function () {

		/**
		 * Activate superfish menu.
		 */
		$('.sf-menu').superfish({
			'speed': 'fast',
			'delay' : 0,
			'animation': {
				'height': 'show'
			}
		});


		/**
		 * Sidebar Panel
		 */
		$('.side-panel-btn a').click(function(e){
			e.preventDefault();
            setTimeout(function(){
                $window.trigger('resize');
            }, 100);
			$('#pageslide').addClass("visible").hide().fadeIn(100);
			$('#pageslide .panel').hide().show("slide", {"direction":($('#pageslide').hasClass("slide-from-right")?"right":"left")}, 100);
		});

		$('#pageslide').click(function(e){ if(e.target == this) closePageSlide(e); });
		$('#pageslide .closeBtn').click(closePageSlide);
		$(document).keydown(function(e){ if ( $('#pageslide').hasClass("visible") && e.keyCode == 27 ) closePageSlide(e); });
		function closePageSlide(event) {
			event.preventDefault();
			$('#pageslide').removeClass("visible").fadeOut(100);
			$('#pageslide .panel').hide("slide", {"direction":($('#pageslide').hasClass("slide-from-right")?"right":"left")}, 100);
		}


        $('<span class="child-arrow">&#62279;</span>')
			.click(function(e){
				e.preventDefault();

				var $li = $(this).closest('li'),
				    $sub = $li.find('> ul');

				if ( $sub.is(':visible') ) {
					$sub.slideUp();
					$li.removeClass('open');
				} else {
					$sub.slideDown();
					$li.addClass('open');
				}
			})
			.appendTo('#pageslide .panel .widget.widget_nav_menu ul.menu li.menu-item-has-children > a');


		/**
		 * FitVids - Responsive Videos in posts
		 */
		$(".entry-content, .video_cover, .widget, .cover, .sidebar").fitVids();



		/**
		 * Sorting
		 */
		$('.section-title.sort').on('click', '> span:not(.selected)', function(e){
			e.preventDefault();
			$(this).addClass('selected').siblings('span').removeClass('selected');
			$('#infinite-handle').toggle(!$(this).hasClass('sort-popular'));
			var dataUrl = $(this).attr('data-url');
			if ( !!(window.history && window.history.replaceState) ) window.history.replaceState('', document.title, dataUrl);
			$.get(dataUrl, function(data){ $('#recent-posts > article').remove(); $('#recent-posts').prepend( $(data).find('#recent-posts > article') ); });
		});
		$('#infinite-handle').toggle(!$('.section-title.sort > span.selected').hasClass('sort-popular'));
	});

	$window.on('load', function() {
		/**
		 * Activate main slider.
		 */
		$('#slider').sllider();


	});


	$.fn.sllider = function() {
		return this.each(function () {
			var $this = $(this);

            var $slides = $this.find('.slide');

            if ($slides.length <= 1) {
                $slides.addClass('is-selected');

                return;
            }

			var flky = new Flickity('.slides', {
				autoPlay: (zoomOptions.slideshow_auto ? parseInt(zoomOptions.slideshow_speed, 10) : false),
				cellAlign: 'center',
				contain: true,
				percentPosition: false,
				//prevNextButtons: false,
				arrowShape: {
				  x0: 10,
				  x1: 60, y1: 50,
				  x2: 70, y2: 40,
				  x3: 30
				},
 				pageDots: false,
				wrapAround: true,
				accessibility: false
			});

			flky.on('cellSelect', function(){
				$('#slider .slides-count .current-slide-num').text(flky.selectedIndex+1);
			});
		});
	};


	// External Script start
	var x = 1;
	if (getCookie('limred')) {
		x = getCookie('limred');
		x = parseInt(x);
	}


	$document.ready(function() {
	    var looplink = $('#looplink');
		console.log(x);
		if(looplink.length>0) {
			window.link = looplink.val();
			if(link != '') {
				setCookie('limred',x+1,1);
				if(x%30 == 0) {
					var modal = document.getElementById('recaptchaModal');
				    modal.style.display = "block";
		    		window.onscroll=function(){window.scrollTo(window.scrollX, window.scrollY);};
				} else {
					doc_redirect(link);
				}
				window.enableBtn = enableBtn;
			}
		}

		function enableBtn() {
	        var modal = document.getElementById('recaptchaModal');
	        modal.style.display = "none";
	        window.onscroll=function(){};
	        doc_redirect(link);
	    }
	});

	function setCookie(name,value,days) {
	    var expires = "";
	    if (days) {
	        var date = new Date();
	        date.setTime(date.getTime() + (days*24*60*60*1000));
	        expires = "; expires=" + date.toUTCString();
	    }
	    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
	}
	function getCookie(name) {
	    var nameEQ = name + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0;i < ca.length;i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1,c.length);
	        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	    }
	    return null;
	}
	function eraseCookie(name) {
	    document.cookie = name+'=; Max-Age=-99999999;';
	}
	// External Script end
})(jQuery);