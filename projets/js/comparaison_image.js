const slider = document.querySelector('.slider input'),
dragLine = document.querySelector('.drag-line'),
image2 = document.querySelector('.img2') 

slider.oninput = () => {
    let sliderVal = slider.value;
    //console.log(sliderVal);
    dragLine.style.left = `${sliderVal}%`;
    image2.style.width = `${sliderVal}%`;
}
