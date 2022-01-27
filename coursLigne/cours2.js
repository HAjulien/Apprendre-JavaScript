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


//------------------------------------------------------------------------------------------------------

const inputName = document.querySelector('input[type ="text"]');
const select = document.querySelector('select'); 
const form = document.querySelector("form");
let pseudo ="";
let language = "";

console.log("form");
console.log(select);
console.log(inputName);



inputName.addEventListener('input', (e) =>{
    // console.log(e.target.value);
    // valeur dans target (...)
    pseudo = e.target.value;
    // console.log(pseudo); ou interroger console avec console.log(pseudo)
});

select.addEventListener('input', (e) =>{
    // console.log(e.target.value);
    language = e.target.value;
    console.log(language);
});


form.addEventListener('submit', (e)=>{
    e.preventDefault();   //pour me pas faire disparaitre formulaire annule changement page
    // console.log("yes");
    // console.log(cgv.checked); pas besoin de definir variable/bouton pour les checkbox, juste id



    //innerHTML pou injecter balise et textcontent que du texte
    if(cgv.checked) {
        document.querySelector('form > div').innerHTML = `
        <h3>Pseudo : ${pseudo}</h3>
        <h4>Langage préfére: ${language}<h4>
        `;
    }else{
        alert("Veuillez accepter les conndition de vente");
    }
});


//-----------------------------------------------------------------------
//load event au demarrage de la page
window.addEventListener("load", () =>{
    console.log('Document chargé !');
});

//--------------------------------------------------------------------
const boxes = document.querySelectorAll('.box');
//pour selectionner les elements qui ont la même classe 1 ex eventlistener pout toutes ces boites 
console.log(boxes);

//foreach

boxes.forEach((box) =>{
    box.addEventListener('click',(e)=>{
        // console.log(e.target);
        e.target.style.transform = "scale(.7)";
    });
});