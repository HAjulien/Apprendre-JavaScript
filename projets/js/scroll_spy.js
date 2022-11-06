const RATIO = 0.6
const spies = document.querySelectorAll('[data-spy]')
let observer = null

/**
 * 
 * @param {HTMLElement} ele 
 * @returns 
 */
const actived = (ele) => {
    const id = ele.getAttribute('id')
    const anchor = document.querySelector(`a[href="#${id}"]`)
    if (anchor === null) return null

    anchor.parentElement
        .querySelectorAll('.active')
        .forEach(node => node.classList.remove('active'))
    anchor.classList.add('active')
}


/**
 * @param {IntersectionObserverEntry[]} entries 
 */
const callback = (entries) =>{
    //console.log(entries);
    entries.forEach( entry => {
        if (entry.isIntersecting){
            actived(entry.target)
        }
    })
}


/**
 * @param {NodeListOf.<Element>} elems 
 */
const observe = (elems) => {
    if (observer !== null) {
        elems.forEach(elem => observer.unobserve(elem))
    }
    const y = Math.round(window.innerHeight * RATIO)
    const line1px = window.innerHeight - y - 1
    
    observer = new IntersectionObserver (callback, {
        rootMargin : `-${line1px}px 0px -${y}px 0px`
    })
    spies.forEach( elem => observer.observe(elem))
}

/**
 * 
 * @param {function} callback 
 * @param {number} delay 
 * @returns {function}
 */
const debounce = (callback, delay) => {
    let timer;
    return function(){
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function(){
            callback.apply(args);
        }, delay)
    }
}

if (spies.length > 0){
    let windowH = window.innerHeight
    observe(spies)
    window.addEventListener('resize', debounce(function(){
        if(windowH === window.innerHeight) return null
        observe(spies)
        //console.log('test');
        windowH = window.innerHeight
    },500))
}