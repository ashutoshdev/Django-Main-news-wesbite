document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.ref-link').forEach(el => {
        el.addEventListener('click', e => {
            copyToClipboard(e, e.target.dataset.link)
        })
    })
});