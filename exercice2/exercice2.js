
const color =document.getElementById('color');
const padding =document.getElementById('padding');
const height =document.getElementById('height');
const width =document.getElementById('width');
const radius =document.getElementById('radius');
const rotate =document.getElementById('rotate');
const titre = document.getElementById('titre');

let afficheColor = 0;
let affichePadding =0;
let afficheHeight =0;
let afficheWidth = 0;
let afficheRadius =0;
let afficheRotate =0;


color.addEventListener('input',(e) =>{
    afficheColor= e.target.value;
    document.getElementById('AfficheColor').textContent = `${afficheColor}`;
});

padding.addEventListener('input',(e) =>{
    affichePadding= e.target.value;
    document.getElementById('AffichePadding').textContent = `${affichePadding}`;
});

height.addEventListener('input',(e) =>{
    afficheHeight= e.target.value;
    document.getElementById('AfficheHeight').textContent = `${afficheHeight}`;
    titre.style.height = `${afficheHeight}px`;

});

width.addEventListener('input',(e) =>{
    afficheWidth= e.target.value;
    document.getElementById('AfficheWidth').textContent = `${afficheWidth}`;
    titre.style.width = `${afficheWidth}px`;
});

radius.addEventListener('input',(e) =>{
    afficheRadius= e.target.value;
    document.getElementById('AfficheRadius').textContent = `${afficheRadius}`;
});

rotate.addEventListener('input',(e) =>{
    afficheRotate= e.target.value;
    document.getElementById('AfficheRotate').textContent = `${afficheRotate}`;
});



//----------------------------------------------------------------------------------------

let paragraphe = document.getElementById('para');

paragraphe.addEventListener('click', () =>{
    paragraphe.classList.toggle('active')
});

//---------------------------------------------------------------------