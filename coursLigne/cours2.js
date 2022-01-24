//SELECTEURS

// document.querySelector('h4').style.color = "yellow";

// const baliseHTML = document.querySelector('h4');

// on enferme balise dans une variable
// console.log(baliseHTML);

// baliseHTML.style.background = "yellow";


//clik event
//niveau du selecteur css
const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const response = document.querySelector('p');


// console.log(btn1, btn2); tjs console.log pour vérifier


// questionContainer.style.borderRadius = "50px";


questionContainer.addEventListener('click',() => {
        questionContainer.classList.toggle('question-clicked');
//on sait que l'on parle d'une classe grace classList add ajoute ou toogle aller-retour
});

btn1.addEventListener('click', () =>{
    response.classList.add('show-response');
    response.style.background = "green";
});

btn2.addEventListener('click', () =>{
    response.classList.add('show-response');
    response.style.background = "red";  
});







