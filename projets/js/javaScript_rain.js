const canvas = document.getElementById('canvas1'),
ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particlesArray = [];
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
}

class Particle {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = Math.random() * 15 + 1;
        this.weight = Math.random() * 1 + 1;
        this.directionX = -2;
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
        ctx.fillStyle = 'orangered';
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
        particlesArray.push(new Particle(x,y))
    }
}

init();

function animate(){
    ctx.fillStyle= 'rgba(255,255,255,0.01)';
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
    }
    init();
})