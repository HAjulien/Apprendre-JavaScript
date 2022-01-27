
const color =document.getElementById('color');
let afficheColor = document.getElementById('AfficheColor');


color.addEventListener('input',(e) =>{
    afficheColor= e.target.value;
});










let paragraphe = document.getElementById('para');

paragraphe.addEventListener('click', () =>{
    paragraphe.classList.toggle('active')
});