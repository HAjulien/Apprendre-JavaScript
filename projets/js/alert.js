/**
 * Renvoi un element HTML représentent une alert
 * @param {string} message
 * @param {string} type
 * @return {HTMLElement}
 */
export function alertElement(message, type = 'danger'){
    const el = document.querySelector('#alert').content.firstElementChild.cloneNode(true)
    el.classList.add(`alert-${type}`)
    el.querySelector('.js-text').innerText = message
    el.querySelector('button').addEventListener('click', (e) =>{
        e.preventDefault();
        el.remove()
        el.dispatchEvent(new CustomEvent('custom:close'))
    });
    return el

}