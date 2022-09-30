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
reset = document.querySelector('.reset'),
INTERVAL_TIME_MS = 10;

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
    myInterval = setInterval(chrono, INTERVAL_TIME_MS)
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
toDoInput = document.querySelector('.toDo'),
BTN_SUPRESS_INNERTEXT_LENGHT = -9;

const createToDo = (value) => {
    const newToDo = document.createElement("li");
    newToDo.innerText = value;
    newToDo.style.margin = '10px 0';
    newToDo.classList.add('todo');

    const supress = document.createElement("button");
    supress.innerText = 'supprimer';
    supress.style.margin = '0 5px';

    newToDo.appendChild(supress);
    list.appendChild(newToDo);
}

const displayLocalToDo = () => {
    if (!localStorage.getItem('todos')) return console.log('pas de todo List');
    const localTodos = JSON.parse(localStorage.getItem('todos'));
    localTodos.forEach(todo => {
        createToDo(todo)
    });
}

displayLocalToDo()

const addToDo = () => {
    if( (toDoInput.value).replace(/ /g, "") === "" ) return toDoInput.value = '';
    createToDo(toDoInput.value)
    toDoInput.value = '';
};

submit.addEventListener('click', ()=>{
    addToDo()
});

toDoInput.addEventListener('keydown', (e)=>{
    //console.log(e.key);
    if (e.key === 'Enter') return addToDo();
})

save.addEventListener('click', () =>{
    const todos = [...document.querySelectorAll('.todo')];
    let listTodos = todos.map(todo => todo.textContent.slice(0, BTN_SUPRESS_INNERTEXT_LENGHT))
    //console.log(JSON.stringify(listTodos));
    localStorage.setItem('todos', JSON.stringify(listTodos))
});

suppressAllToDo.addEventListener('click', () =>{
    let confirm = window.confirm('Are you sure you want to delete?')
    if (!confirm) return
    localStorage.removeItem('todos');
    list.innerHTML = '';
});

list.addEventListener('click', (e) =>{
    let target = e.target; // where was the click?
    //console.log(target);
    //if (target.className === 'todo') return console.log("je test nom de class");
    if (target.tagName === 'LI') return target.classList.toggle("barrer");
    if (target.tagName != 'BUTTON') return
    let confirm = window.confirm('Are you sure you want to delete?')
    if (!confirm) return
    target.parentElement.remove()
});
