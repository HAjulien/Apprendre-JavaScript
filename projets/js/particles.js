const canvas = document.getElementById('canvas1'),
ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particlesArray = [];

//handle mousse
let mouse = {
    x : null,
    y : null,
    radius: 100
}

window.addEventListener('mousemove', (e)=> {
    mouse.x = e.x; 
    mouse.y = e.y;
    //console.log(mouse.x, mouse.y); 
});

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
                this.x -= dx/20       //the code is read every frame 
            }  
            if( this.y !== this.baseY){
                let dy = this.y - this.baseY; 
                this.y -= dy/20   
            }  
        }
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc( this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

const init = () =>{
    particlesArray = [];

    for (let i = 0; i < 500; i++){
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y));
    }
    // particlesArray.push(new Particle(50,50));
    // particlesArray.push(new Particle(170,80));
}

init();
//console.log(particlesArray);

const animate = () =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach( particle => { particle.draw(); particle.update() } );
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();

})