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

// un chronometre----------------------------------------------------------------------------------------------------------------------

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

//TodoList-----------------------------------------------------------------------------------------------------------------------------

const list = document.querySelector('.list'),
submit = document.querySelector('.submit'),
save = document.querySelector('.save'),
suppressAllToDo = document.querySelector('.suppressAllToDo'),
toDo = document.querySelector('.toDo');

const dataCreate = (value) => {
    const newToDo = document.createElement("li");
    newToDo.innerText = value;
    newToDo.style.margin = '10px 0';
    const supress = document.createElement("button");
    supress.innerText = 'supprimer';
    supress.style.margin = '0 5px';
    newToDo.classList.add('corve');
    newToDo.appendChild(supress);
    list.appendChild(newToDo);
}

const displayLocalData = () => {
    if (!localStorage.getItem('corves')) return console.log('pas de data');
    const localDatas = JSON.parse(localStorage.getItem('corves'));
    localDatas.forEach(data => {
        dataCreate(data)
    });
}

displayLocalData()

const addToDo = () => {
    if((toDo.value).replace(/ /g, "") === "") return toDo.value = '';
    dataCreate(toDo.value)
    toDo.value = '';
};

submit.addEventListener('click', ()=>{
    addToDo()
});

toDo.addEventListener('keydown', (e)=>{
    //console.log(e.key);
    if (e.key === 'Enter') return addToDo();
})

save.addEventListener('click', () =>{
    const corves = [...document.querySelectorAll('.corve')];
    let listCorves = corves.map(corve => corve.textContent.slice(0, -9))
    console.log(JSON.stringify(listCorves));
    localStorage.setItem('corves', JSON.stringify(listCorves))
});

suppressAllToDo.addEventListener('click', () =>{
    let confirm = window.confirm('Are you sure you want to delete?')
    if (!confirm) return
    localStorage.removeItem('corves');
    list.innerHTML = '';
});

list.addEventListener('click', (e) =>{
    let target = e.target; // where was the click?
    //console.log(target);
    if (target.tagName === 'LI') return target.classList.toggle("barrer");
    if (target.tagName != 'BUTTON') return

    //target.remove();
    let confirm = window.confirm('Are you sure you want to delete?')
    if (!confirm) return
    target.parentElement.remove()
});
