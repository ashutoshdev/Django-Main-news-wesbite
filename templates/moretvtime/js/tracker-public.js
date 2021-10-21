/**
* check interstitialModal popup
*/
const show_interstitial = (e) => {
    let interstial_modal = document.querySelector('#interstial-model');
    interstial_modal.classList.add('is-active');
};

/**
* check interstitialModal popup
*/
const show_interstitial_next = (e) => {
    event.preventDefault();
    show_interstitial()

};

/**
 * without login next button interstitial
 */
document.addEventListener('DOMContentLoaded', () => {
        let nextBtn = jQuery('.article-btn-next');
        nextBtn.one('click', (e) => show_interstitial_next(e));
        jQuery('#add-url').attr('href',nextBtn.attr('href'));

});
