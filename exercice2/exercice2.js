
let color =document.getElementById('color').value;
let afficheColor = document.getElementById('AfficheColor');

afficheColor = color;
alert(afficheColor);




let paragraphe = document.getElementById('para');

paragraphe.addEventListener('click', () =>{
    paragraphe.classList.toggle('active')
});