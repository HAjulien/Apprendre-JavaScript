const   buttonsForward = [...document.querySelectorAll('.button-forward')],
        buttonsBack = [...document.querySelectorAll('.button-back')]
let activeIndex = 0


buttonsForward.forEach( button => {
    button.addEventListener("click", () =>{
        const nextIndex = activeIndex + 1 <= buttonsForward.length-1 ? activeIndex + 1 : 0

        const   currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
                nextSlide = document.querySelector(`[data-index="${nextIndex}"]`)

        nextSlide.dataset.status = "inactive-start-right"
        setTimeout(()=>{
            currentSlide.dataset.status = "inactive-left"
            nextSlide.dataset.status = "active"
            activeIndex = nextIndex
        },100)
    })
})

buttonsBack.forEach( button => {
    button.addEventListener("click", () =>{
        const previousIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : buttonsBack.length-1
        
        const   currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
                previousSlide = document.querySelector(`[data-index="${previousIndex}"]`)

        previousSlide.dataset.status = "inactive-start-left"

        setTimeout(()=>{
            currentSlide.dataset.status = "inactive-right"
            previousSlide.dataset.status = "active"
            activeIndex = previousIndex
        },100)
    })
})