
const getMttCSRF = () =>
    document.cookie
        .split(';')
        .map(c => c.split('='))
        .find(c => c[0].trim() === 'csrftoken')[1];

document.addEventListener('DOMContentLoaded', () => {

    let body = jQuery('body');
    let head = jQuery('head');

    let article = document.querySelector('article');
    let articleContent = document.querySelector('#article-content');
    let articleContentP1 = document.querySelector('#article-content p:nth-child(1)');
    let articleContentP3 = document.querySelector('#article-content p:nth-child(3)');
    let articleContentP5 = document.querySelector('#article-content p:nth-child(5)');

    article = jQuery(articleContentP5 || articleContentP3 || articleContentP1 || articleContent || article);

    article.append(`<script async type="text/javascript" class="teads" src="//a.teads.tv/page/88352/tag"></script>`);

    /**
     * skinz ad
     */
    body.append(`<script async type="text/javascript" src="http://ads.ayads.co/ajs.php?zid=25303"></script>`);
});

