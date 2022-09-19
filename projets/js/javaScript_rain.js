const canvas = document.getElementById('canvas1'),
ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let isMovingRight = false;
let isMovingLeft = false;
let particlesArray = [];
let color = 0;
const numberOfParticles = 300;

let titleElement = document.getElementById('title1'),
titleMeasurements = titleElement.getBoundingClientRect(),
// console.log(titleMeasurements);
title = {
    x : titleMeasurements.left,
    y : titleMeasurements.top,
    width : titleMeasurements.width,
    // height : titleMeasurements.height,
    height : 20,
    baseX: titleMeasurements.left
}

class Particle {
    constructor(x, y, color){
        this.x = x;
        this.y = y;
        this.size = Math.random() * 15 + 5;
        this.weight = Math.random() * 1 + 1;
        this.directionX = -2;
        this.color = color;
        this.saturation = Math.floor(Math.random() * 50) + 50
    }
    update() {
        if(this.y > canvas.height){
            this.y = 0 - this.size;
            this.weight = Math.random() * 1 + 1;
            this.x = Math.random() * canvas.width * 1.2;
        }
        this.weight += 0.05;
        this.y += this.weight;
        this.x += this.directionX; 

        //check collision between each particles and title element
        if(
            this.x < title.x + title.width &&
            this.x + this.size > title.x &&
            this.y < title.y + title.height &&
            this.y + this.size > title.y
        ) {
            this.y -= 3;
            this.weight *= -0.5;
        }
    }
    draw(){
        ctx.fillStyle = `hsl(${this.color}, ${this.saturation}%, 50%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();

    }
}

function init(){
    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++){
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        //const y = (Math.random() * canvas.height) * 0.4;
        if (color > 255)  color = 0;
        particlesArray.push(new Particle(x, y, color))
        color++;

    }
}

init();

function animate(){
    ctx.fillStyle= 'rgba(255,255,255,0.9)';
    //ctx.fillStyle= 'rgba(255,255,255)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
    })
    // for( let i =0; i < particlesArray.length; i++){
    //     particlesArray[i].update();
    //     particlesArray[i].draw();
    // }
    if( isMovingRight ){
        title.x -= 5
    }
    if(title.baseX - title.x > 100 ) isMovingRight = false;
    if(isMovingLeft) title.x += 5
    if(title.x - title.baseX > -3 ) isMovingLeft = false;

    ctx.fillStyle= `hsl(185, 90%, 60%)`;
    ctx.fillRect(title.x, title.y, title.width, title.height);
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    titleMeasurements = titleElement.getBoundingClientRect();
    title = {
        x : titleMeasurements.left,
        y : titleMeasurements.top,
        width : titleMeasurements.width,
        // height : titleMeasurements.height,
        height : 20,
        baseX: titleMeasurements.left
    }
    init();
})
titleElement.addEventListener('mouseenter', function(){
    isMovingRight = true;
    isMovingLeft = false ;
    titleElement.style.translate = "-70% -50%"

})

titleElement.addEventListener('mouseleave', function(){
    isMovingRight = false;
    isMovingLeft = true;
    titleElement.style.translate = "-50% -50%"


})