
const canvas = document.getElementById('canvas1'),
ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particlesArray = [];
let adjustX = 10,
adjustY = 20;

//handle mousse
let mouse = {
    x : null,
    y : null,
    radius: 150
}

window.addEventListener('mousemove', (e)=> {
    mouse.x = e.x; 
    mouse.y = e.y;
    //console.log(mouse.x, mouse.y); 
});

ctx.fillStyle = 'white';
ctx.font = '25px Verdana';
ctx.fillText('Test', 0, 30);
const textCoordinates = ctx.getImageData(0, 0, 100, 100);

class Particle {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = 3;
        //remember the original position of the particle
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 40 + 5;
    }
    update() {
        let dx = mouse.x - this.x;    
        let dy = mouse.y - this.y;    
        //theoreme de pythagore find the hypotenuse each particle is aware of the distance of the mouse
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance * 3;
        let forceDirectionY = dy / distance * 3;
        let maxDistance = mouse.radius;
        //stop moving when maxDistance is reach and speed decrease
        let force = (maxDistance - distance ) /maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;
        if (distance < mouse.radius) {
            //this.size = 30;
            this.x -= directionX;
            this.y -= directionY;
        }

        else {
            //if particule has move from original position
            if( this.x !== this.baseX){
                let dx = this.x - this.baseX;  //find the distance between the particle and original position
                this.x -= dx/10;       //the code is read every frame 
            }  
            if( this.y !== this.baseY){
                let dy = this.y - this.baseY; 
                this.y -= dy/10;   
            }  
        }
    }
    draw(){
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc( this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}
console.log(textCoordinates.data);
const init = () =>{
    particlesArray = [];
    for (let y = 0, y2 = textCoordinates.height; y< y2; y++){
        for (let x = 0, x2 = textCoordinates.width; x< x2; x++){
            if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128){  //128 = 50% opacity
                let positionX = x + adjustX;
                let positionY = y + adjustY;
                particlesArray.push(new Particle (positionX * 25, positionY * 25));
            }
        }
    }

}

const connect = () =>{
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++){
        for(let b = a; b < particlesArray.length; b++){
            let dx = particlesArray[a].x - particlesArray[b].x;
            let dy = particlesArray[a].y - particlesArray[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if(distance < 80){
                opacityValue = 1 - (distance/80);
                ctx.strokeStyle = `rgba(255,255,255,${opacityValue})`;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

init();
//console.log(particlesArray);

const animate = () =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach( particle => { particle.draw(); particle.update() } );
    connect();
    requestAnimationFrame(animate);
}

animate();