/**
 * 
 * @param {string} tagName 
 * @param {object} attributes
 * @return {HTMLElement} 
 */
export function createElement(tagName, attributes){
    const element = document.createElement(tagName)
    const arrayAttributes = Object.entries(attributes)
    for( const [attribute, value] of arrayAttributes){
        if(value !== null ) {
            element.setAttribute(attribute, value)
        }
    }
    return element
}

/**
 * 
 * @param {string} id 
 * @returns {DocumentFragment}
 */
export function cloneTemplate(id){
    return document.getElementById(id).content.cloneNode(true)
}