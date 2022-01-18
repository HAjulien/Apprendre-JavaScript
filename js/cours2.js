// let number = 0;
// let output = number++;

// alert(number);
// document.write(output);


let number = 0;
while (number < 10){
    number++;       //affiche jusqu'a 10
    alert(number);
    // number++;  affiche jusqu'a 9
}

// for(let iter = 0; iter <10; iter++){
//     alert("iteration n°" + iter);
// } même chose

let sayHello3 = (function(){
    return "Hello World";
})();

alert(sayHello3);

let calcul1 =(function(){
                let var1 = 2, var2 = 3;
                return var1*var2;
            })();

alert(calcul1);
