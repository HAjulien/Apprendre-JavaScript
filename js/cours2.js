// let number = 0;
// let output = number++;

// alert(number);
// document.write(output);


let number = 0;
while (number < 10){
    number++;       //affiche jusqu'a 10
    //alert(number);
    // number++;  affiche jusqu'a 9
}

// for(let iter = 0; iter <10; iter++){
//     alert("iteration n°" + iter);
// } même chose

let sayHello3 = (function(){
    return "Hello World";
})();

//alert(sayHello3);

let calcul1 =(function(){
                let var1 = 2, var2 = 3;
                return var1*var2;
            })();

//alert(calcul1);

//on essaie de faire un chronometre
const span = document.querySelector('.chronometre'),
arreter = document.querySelector('.arreter'),
start = document.querySelector('.start'),
reset = document.querySelector('.reset');

let centiemeSeconde = seconde = minute = myInterval = 0,
isRunning = false

function chrono () {
        centiemeSeconde ++
        if(centiemeSeconde >= 100) {centiemeSeconde = 0, seconde++}
        if(seconde >= 60) {seconde = 0, minute ++}
        //console.log(`${minute < 10 ? `0${minute}`: `${minute}`}: ${seconde < 10 ? `0${seconde}`: `${seconde}`}`);
        span.innerText = `${minute < 10 ? `0${minute}`: `${minute}`}:${seconde < 10 ? `0${seconde}`: `${seconde}`}:${centiemeSeconde < 10 ? `0${centiemeSeconde}`: `${centiemeSeconde}`}`
        isRunning = true
}

start.addEventListener('click',()=>{
    if(isRunning) return
    myInterval = setInterval(chrono, 10)
});

arreter.addEventListener('click', function(){
    isRunning = false
    clearInterval(myInterval)
})

reset.addEventListener('click', function(){
    isRunning = false
    clearInterval(myInterval);
    centiemeSeconde = seconde = minute = myInterval = 0 ;
    span.innerText = `00:00:00`;

})

