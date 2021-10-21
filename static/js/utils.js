
const getMttCSRF = () =>
    document.cookie
        .split(';')
        .map(c => c.split('='))
        .find(c => c[0].trim() === 'csrftoken')[1];


const copyToClipboard = (element, value) => {
    let clipboard = document.createElement("input");
    document.body.appendChild(clipboard);
    clipboard.value = value || element && element.innerText;
    clipboard.select();
    document.execCommand("copy");
    clipboard.remove();
};