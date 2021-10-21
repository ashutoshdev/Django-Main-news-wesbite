
let turnView = {% if tracker.turn_views %} {{tracker.turn_views}} {% else %} 0 {% endif %}
let turnViewLimit = {% if tracker.turn_views_limit %} {{tracker.turn_views_limit}} {% else %} 3 {% endif %}

const signStyle = {
    margin: '0px auto',
    display: 'block',
    padding: '20px',
    color: 'white',
    'border-radius': '5px',
    'background-color': '#ff3016',
    'text-align': 'center',
     'display': 'none'
};

const btnStyle = Object.assign(signStyle, {
    padding: 0,
    height: 0
});

const success = {
    'background-color': '#23d160',
    'font-size': '12px',
    'line-height': '12px',
    padding: '20px',
    margin: '0 auto',
    cursor: 'pointer'
};

const wrongSign = {
    color:'red',
    padding: '8px',
    margin: '0 auto',
    border: '1px solid #fbc2b5',
    'text-align': 'center',
    'padding-left': '50px',
    display: 'block'
};

let timer_1 = 20;

{# Prevent several windows #}

if (window.location.pathname !== '/') {
    localStorage.setItem('instance-check', 'true');
    window.addEventListener("storage", function(event) {
        if(!event.newValue) return;          // do nothing if no value to work with
        if (event.key === 'instance-check' && event.newValue === 'true') {
            window.location = '/';
        }
    }, false);
}

{# Prevent several windows #}


const doFinalAction = (target) =>  new Promise((resolve) => {
    fillProgress(turnView + 1, turnViewLimit);
    return doAction(target, 'Click here to continue', signStyle, '<button></button>')
        .then(args => {
            let {btn} = args;
            show_interstitial_mobile(btn);
            {% block provider_name %}
                {% if provider_name %}
                   check_provider('{{provider_name}}')
                {% endif %}
            {% endblock %}

        })
});

const doCaptchaAction = (target) =>  new Promise((resolve) => {
    return doAction(target, 'You can close page in {0} seconds', signStyle, '<button></button>')
        .then(args => {
            let {btn, adsEl1, adsEl2, adsEl3, adsEl4} = args;

            btn.text('Submit captcha');
            btn.css({
                padding: '20px'
            });

            btn.on('click', () => {
                let wrongEl = jQuery('#wrongCaptchaEl');
                if (wrongEl.length) {
                    wrongEl.hide()
                }

                fetch('/solvemedia/solve', {
                    method: 'POST',
                    credentials: 'same-origin',
                    headers: {'content-type': 'application/json'},
                    body: JSON.stringify({
                        response: ACPuzzle.get_response(),
                        challenge: ACPuzzle.get_challenge()
                    })
                })
                    .then(r => r.json())
                    .then(r => {
                        if (r.success) {
                            if (wrongEl.length) {
                                wrongEl.hide()
                            }
                            btn.hide();
                            resolve();
                            adsEl1 && (adsEl1.attr('autoremove') !== 'false')  && adsEl1.remove();
                            adsEl2 && (adsEl2.attr('autoremove') !== 'false')  && adsEl2.remove();
                            adsEl3 && (adsEl3.attr('autoremove') !== 'false')  && adsEl3.remove();
                            adsEl4 && (adsEl4.attr('autoremove') !== 'false')  && adsEl4.remove();
                            btn.remove();
                        } else {
                            if (!wrongEl.length) {
                                wrongEl = jQuery('<div id="wrongCaptchaEl">Incorrect captcha. Try again</div>');
                                btn.parent().parent().append(wrongEl)
                            }
                            wrongEl.css(wrongSign);
                            wrongEl.show();
                            window.ACPuzzle.reload();
                        }
                    })
            });

        })
});

const doRedirectAction = (target) =>  new Promise((resolve) =>
    doAction(target, 'Click me in {0} seconds', btnStyle, '<button></button>')
        .then(args => {
            let {btn, adsEl1, adsEl2, adsEl3, adsEl4} = args;

            if (!btn) {
                return resolve({})
            }

            window.addEventListener('message', (m) => {
                console.log('[MESSAGE]', m.origin, m.data, m);
                if (m.origin.match('moretvtime.arkadiumarena.com') && m.data === 'get') {
                    let timeout = timer_1;
                    let text = 'Click me in {0} seconds';
                    const interval = setInterval(() => {
                        if (timeout <= 0) {
                            clearInterval(interval);
                            btn.on('click', () => {
                                btn.hide();
                                window.open('http://gamesgalore.site/games/r/?sub_id={{tracker.sub_id}}&uuid={{tracker.sign}}&provider=mtt&ref_provider={{tracker.provider}}');
                                btn.remove();
                            });
                            btn.css(success);
                            btn.text('Click here to continue');
                            return btn.after('<div style="color:red;text-align: center;margin: 20px;">After you click the green button you will be transferred to GamesGalore.site for the remaining 20 seconds.</div>')
                        }

                        btn.text(text.replace('{0}', timeout));

                        timeout = timeout - 1;
                    }, 1000)
                }
            });
            btn.css(btnStyle);
            btn.text('Click on one of the games below');
        })
);

const doIframeAction = (target) =>  new Promise((resolve) =>
    doAction(target, 'Click me in {0} seconds', btnStyle, '<button></button>')
        .then(args => {
            let started = false;
            let countdown = jQuery('#progressbar-text');
            let countdownText = 'You can continue in {0} seconds';

            const finallyStart = () => {
                if (started) {
                    return
                } else {
                    started = true
                }

                setTimeout(() => resolve({}), 5000);
                let timeout = timer_1;

                const interval = setInterval(() => {
                    if (timeout <= 0) {
                        return clearInterval(interval);
                    }
                    let btnText = jQuery('#progressbar-text').find('button').text();
                    if (!btnText) {
                        countdown.text(countdownText.replace('{0}', timeout));
                    }
                    timeout = timeout - 1;
                }, 1000)
            };

            const listener = (m) => {
                console.log('[MESSAGE]', m.origin, m.data);
                if (m.origin.match('moretvtime.arkadiumarena.com') /**&& m.data === 'get'**/) {
                    window.removeEventListener('message', listener);
                    finallyStart()
                }
            };
            window.addEventListener('message', listener);

            // setTimeout(finallyStart, 5000)
            finallyStart()
        })
);

const doStartAction = (target) =>   new Promise((resolve) =>
    doAction(target, '', btnStyle, '<button></button>')
        .then(args => {
            let {btn, adsEl1, adsEl2, adsEl3, adsEl4} = args;

            let started = false;
            let countdown = jQuery('#progressbar-text');
            let countdownText = 'You can continue in {0} seconds';

            scrollPage(0);
            // setTimeout(() => resolve({}), 5000);
            let timeout = timer_1;

            const interval = setInterval(() => {
                if (timeout <= 0) {
                    return clearInterval(interval);
                }
                let btnText = jQuery('#progressbar-text').find('button').text();
                if (!btnText) {
                    countdown.text(countdownText.replace('{0}', timeout));
                }
                timeout = timeout - 1;
            }, 1000);

            resolve({})

        })
);


const doBtnAction = (target) =>  new Promise((resolve) =>
    doAction(target, 'Click me in {0} seconds', btnStyle, '<button></button>')
        .then(args => {
            let {btn, adsEl1, adsEl2, adsEl3, adsEl4} = args;

            if (!btn) {
                return resolve({})
            }

            btn.on('click', () => {
                btn.hide();
                resolve();
                adsEl1 && (adsEl1.attr('autoremove') !== 'false')  && adsEl1.remove();
                adsEl2 && (adsEl2.attr('autoremove') !== 'false')  && adsEl2.remove();
                adsEl3 && (adsEl3.attr('autoremove') !== 'false')  && adsEl3.remove();
                adsEl4 && (adsEl4.attr('autoremove') !== 'false')  && adsEl4.remove();
                btn.remove();
            });
            btn.css(Object.assign(success, {}));
            btn.text('Click Me');
        })
);

const autoscrollAction = (target) =>  new Promise((resolve) =>
    doAction(target, '', {}, '<div></div>')
        .then(args => {
            let {btn, adsEl1, adsEl2, adsEl3, adsEl4} = args;

            console.log('[ACTION]', target.timeout, target);

            setTimeout(() => {
                resolve({})
            }, target.timeout * 1000);
        })
);

/**
 * Makes the root action of filling placeholders by provided config
 * @return Promise
 */
const doAction = (target, text, style, element) => new Promise(function (resolve) {
    let {order, timeout, btnText, banner_above_button_1, banner_above_button_2, banner_below_button_1, banner_below_button_2, scroll_to_top} = target;

    let article = jQuery('#ph-' + order);

    try{
        fetch(`/analytics?provider={{tracker.provider}}&order=${order}&ip={{tracker.ip}}`);
    } catch (e) {console.log('')}


    console.log('[Action]', target, timeout);
    if (!article.length) {
        return resolve({})
    }

    // Method to fill placeholder (parent) with child element
    const addEl = (parentSelector, childConfig) => {
        if (!childConfig) {
            return
        }

        let parent = jQuery(parentSelector);
        let child = childConfig.is_static ? parent.children() : jQuery(childConfig.code);

        !childConfig.is_static && jQuery(parentSelector).append(child);
        return child.attr('autoremove', childConfig.autoremove);
    };

    // Fill placeholders
    let adsEl1 = addEl(`#ph-${order}-ba1`, banner_above_button_1);
    let adsEl2 = addEl(`#ph-${order}-ba2`, banner_above_button_2);
    let adsEl3 = addEl(`#ph-${order}-bb1`, banner_below_button_1);
    let adsEl4 = addEl(`#ph-${order}-bb2`, banner_below_button_2);

    // Create btn on view
    let btn = jQuery(element);
    btn.css(style);
    jQuery(`#ph-${order}-bt`).append(btn);

    // Do scroll to view
    let ADS_OFFSET = 200;
    setTimeout(() => {
        scrollPage(article.offset().top - ADS_OFFSET) // window.innerHeight / 2);
    }, 1000);

    if (target.button.type === 'autoscroll') {
        return resolve({btn, adsEl1, adsEl2, adsEl3, adsEl4});
    }

    const interval = setInterval(() => {
        if (timeout <= 0) {
            resolve({btn, adsEl1, adsEl2, adsEl3, adsEl4});
            return clearInterval(interval);
        }

        if (document.getElementById("is_mobile") && document.getElementById('article-under') && document.getElementById('article-under').href) {
            btn.text(btnText || 'Click Here to Start the 40 Seconds');
            btn.css(success)
        } else {
            btn.text(text.replace('{0}', timeout));
        }

        timeout = timeout - 1;
    }, 1000)
});

/**
* check interstitialModal popup
*/
const show_interstitial = (e) => {
    let interstial_modal = document.querySelector('#interstial-model');
    interstial_modal.classList.add('is-active');
};

/**
* check crypto-provider popup
*/
const show_crypto_provider = () => {
    let crypto_provider_modal = document.querySelector('#dialog_alert');
    let rootEl = document.documentElement;
    let modalCloses = Array.prototype.slice.call(document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button, .button'), 0);
    crypto_provider_modal.classList.add('is-active');
    modalCloses.forEach(function ($el) {
        $el.addEventListener('click', function () {
            rootEl.classList.remove('is-clipped');
            crypto_provider_modal.classList.remove('is-active');
        });
    });
};

/**
* check crypto-provider popup
*/
const show_crypto_advertising = () => {
    let crypto_advertising_modal = document.querySelector('#crypto_alert');
    let rootEl = document.documentElement;
    let modalCloses = Array.prototype.slice.call(document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button, .button'), 0);
    crypto_advertising_modal.classList.add('is-active');
    modalCloses.forEach(function ($el) {
        $el.addEventListener('click', function () {
            rootEl.classList.remove('is-clipped');
            crypto_advertising_modal.classList.remove('is-active');
        });
    });
};

/**
* check interstitialModal mobile
*/
const show_interstitial_mobile = (btn) => {
    let progressbar = jQuery('#progressbar-text');
    let progButton = jQuery('<button class="button is-success blinking-button is-medium">Click here to continue</button>');

    let nextBtn = jQuery('.article-btn-next');
    let prevBtn = jQuery('.article-btn-prev');

    progressbar.html(progButton);
    prevBtn.one('click', (e) => finish(btn, e, prevBtn.attr('href')));

    let progressbar_continue = jQuery('#progressbar-text-continue');
    let progButton_continue = jQuery('<button class="button is-success blinking-button is-medium show-popup headclass delete"></button>');
    progressbar_continue.html(progButton_continue);
    progressbar_continue.one('click', (e) => finish(btn, e, nextBtn.attr('href') || prevBtn.attr('href')));

    progressbar.one('click', (e) => show_interstitial());
    nextBtn.one('click', (e) => show_interstitial_next(e));

};

/**
* check interstitialModal popup
*/
const show_interstitial_next = (e) => {
    event.preventDefault();
    show_interstitial()

};

/**
* check provider and get paid
*/
const check_provider = (provider) => {
    if (provider == 'crypto-provider'){
        try {
            if ((wallet != null) && (faucethub_add != null)) {
                localStorage.removeItem('Cryptowallet');
                let pth_c = window.location.pathname;
                if ((pth_c !== '/') && (pth_c !== '/faq') && (pth_c !== '/about')) {
                    if (localStorage.getItem('allcount') == null) {
                        localStorage.setItem('allcount', 1);
                    } else {
                        let alcnt = localStorage.getItem('allcount')
                        let alcnt_increment = parseInt(alcnt) + 1
                        localStorage.setItem('allcount', alcnt_increment);
                    }
                }
                let n = localStorage.getItem('article_limit');
                for (let k = 1; k <= parseInt(n); k++) {
                    if (localStorage.getItem('allcount') === n) {
                        localStorage.setItem('payme', 'yes');
                    }
                }
                if (localStorage.getItem('payme') === 'yes') {
                    $.ajax({
                        url: '/faucethub/send',
                        type: "POST",
                        data: {'to': wallet, 'companyname': faucethub_add},
                        success: function (data) {
                            if (data !== 'error') {
                                localStorage.clear();
                                localStorage.setItem('wallet', wallet);
                                localStorage.setItem('faucethubval', faucethub_add);
                                localStorage.setItem('article_limit', n)
                                //console.log("ssss");
                                show_crypto_provider();
                                //console.log("sefrser");
                                $('.amtpop').html(data);
                            }
                            //console.log(wallet);
                        }
                    })
                }
            }
        } catch (e) {
            console.log('crypto-provider error');
        }
    }

    if (provider == 'crypto-advertising'){
        try {
            if ((crypto_wallet != null) && (cadvertising_val != null)) {
                localStorage.removeItem('wallet');

                let pth_c = window.location.pathname;
                if ((pth_c !== '/') && (pth_c !== '/faq') && (pth_c !== '/about')) {
                    if (localStorage.getItem('allcount_cad') == null) {
                        localStorage.setItem('allcount_cad', 1);
                    } else {
                        let alcnt = localStorage.getItem('allcount_cad')
                        let alcnt_increment = parseInt(alcnt) + 1
                        localStorage.setItem('allcount_cad', alcnt_increment);
                }
                }
                var n = localStorage.getItem('article_limit_cad')
                for (var k = 1; k <= parseInt(n); k++) {
                    if (localStorage.getItem('allcount_cad') === n) {
                        localStorage.setItem('payme', 'yes');
                    }
                }
                if (localStorage.getItem('payme') === 'yes') {
                    $.ajax({
                        url: '/faucethub/send',
                        type: "POST",
                        data: {'to': crypto_wallet, 'companyname': cadvertising_val},
                        success: function (data) {
                            if (data !== 'error') {
                                localStorage.clear();
                                localStorage.setItem('Cryptowallet', crypto_wallet);
                                localStorage.setItem('cadvertisingval', cadvertising_val);
                                localStorage.setItem('article_limit_cad', n)
                                show_crypto_advertising();
                                $('.camtpop').html(data);
                            }
                            //console.log(wallet);
                        }
                    })
                }

            }
        } catch (e) {
            console.log('crypto_advertising error');
        }
    }

};


const finish = (button, event, url) => {
    let form = jQuery(`<form method="POST" action="/submit">
            <input type="hidden" name="uuid" value="{{ tracker.sign }}"/>
            <input type="hidden" name="token" value="{{ signature }}"/>
            <input type="hidden" name="provider" value="{{ tracker.provider }}"/>
            <input type="hidden" name="nextUrl" value="${url}"/>
        </form>`);

    {% if provider == 'swagbucks' %}
        window.ncrvFireEvent && window.ncrvFireEvent();

        try{
            fetch(`/analytics?provider={{tracker.provider}}&order=fired&ip={{tracker.ip}}`);
        } catch (e) {console.log('')}
        button ? button.before(form) : jQuery('.rest_article').before(form);
        setTimeout(() => {
            form.submit();
        }, 300);
    {% else %}
        button ? button.before(form) : jQuery('.rest_article').before(form);
        form.submit();
    {% endif %}

};


const scrollPage = (top) => {
    jQuery('html,body').animate({
        scrollTop: top,
        scrollLeft: 0
    }, 300, function(){
        jQuery('html,body').clearQueue();
    });
};

const fillProgress = (i, max) => {
    let value = Math.round((i/max) * 100) || 0;
    let extra = '';
    let text = 0;
    switch (i) {
        case 0: text = 'Progress'; break;
        case max: text = 'Complete'; break;
        default: text = 'Completed'
    }

    /* Chill out */
    if (window.location.search.match('ot=true')) {
        extra = '<div style="top: 0; position: fixed;">There are to much requests come from your IP, please try again in one minute</div>'
    }

    jQuery('#progressbar-value').html(`
        ${extra}
        <progress class="progress is-success is-small" value="${value}" max="100">${value}%</progress>
        <div>${text} ${value}%</div>`)
};

/**
 * Main strategy
 */
const fetchPlaceholders = () =>
    fetch('/api/placeholders', {credentials: 'include'})
    .then(r => r.json())
    .then(data => {
        timer_1 = data.reduce((a,v) => a+=v.timeout || 0, 0)
        data.reduce((a, nextAction, i) => {

            fillProgress(turnView, turnViewLimit);
            if (nextAction.button && nextAction.button.type === 'final') {
                return a.then(() => {
                    return doFinalAction(nextAction)
                })
            }
            if (nextAction.button && nextAction.button.type === 'start') {
                return a.then(() => {
                    return doStartAction(nextAction)
                })
            }
            if (nextAction.button && nextAction.button.type === 'redirect') {
                return a.then(() => {
                    return doRedirectAction(nextAction)
                })
            }
            if (nextAction.button && nextAction.button.type === 'iframe') {
                return a.then(() => {
                    return doIframeAction(nextAction)
                })
            }
            if (nextAction.button && nextAction.button.type === 'captcha') {
                return a.then(() => {
                    return doCaptchaAction(nextAction)
                })
            }
            if (nextAction.button && nextAction.button.type === 'autoscroll') {
                return a.then(() => {
                    return autoscrollAction(nextAction)
                })
            }

            return a.then(() => {
                return doBtnAction(nextAction)
            })
        }, new Promise(r => r()))
    });


const videoplayclick = (selector) => {
    let play_button = jQuery(selector)
    play_button.one('click touchstart', () => fetchPlaceholders())
};



const fetchPlaceholders2 = () =>
    fetch('/api/placeholders', {credentials: 'include'})
    .then(r => r.json())
    .then(data => {
        timer_1 = data.reduce((a,v) => a+=v.timeout || 0, 0)
        data.reduce((a, nextAction, i) => {

            fillProgress(turnView, turnViewLimit);
        }, new Promise(r => r()))

    });


/**
 * Start logic
 */
document.addEventListener('DOMContentLoaded', () => {
    if (!new URLSearchParams(document.location.search).get('submit_success')) {
        console.log('[submit_success] NOT')
        videoplayclick('.vjs-big-play-button')
        return fetchPlaceholders2()
    }

    let rootEl = document.documentElement;
    let modal = document.querySelector('#submit-success-modal');
    let modalCloses = Array.prototype.slice.call(document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button, .button'), 0);
    modal.classList.add('is-active');
    modalCloses.forEach(function ($el) {
        jQuery($el).on('click touchstart', function () {
            rootEl.classList.remove('is-clipped');
            modal.classList.remove('is-active');
            window.history.replaceState(null, null, window.location.pathname);
            console.log('[submit_success] YES')
            videoplayclick('.vjs-paused')
        });
    });

});