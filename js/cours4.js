//changer les liens hypertext

// let link = document.getElementById('mylink');

// let hyperlien = link.href;
// alert(hyperlien);
// 

let link = document.getElementById('mylink');
//utilise getter pour recuperer acceseur
let hyperlink = link.getAttribute('href');
alert(hyperlink);
//utilise setter pour modifier initiateur
link.setAttribute( "href", "http://www.afpa.fr");
alert(link);


document.getElementById('myColoredDiv').className = 'rose';

let element = document.getElementById('clickme');

element.addEventListener('click', function(){
    alert('vous avez cliqué ! ')
},false);


