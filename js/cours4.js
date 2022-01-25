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
let i = 0;


// function change() {
//     element.innerHTML = i++;
// }

element.addEventListener('click', function(){
    // alert('vous avez cliqué ! ')
    // setInterval(change,1000)
    let interval = setInterval(function change(){
        if (i > 10){
        clearInterval(interval);
    }
    element.innerHTML = ++i;
    },1000) 
},false);


element.addEventListener('mouseover',function(){
    element.style.backgroundColor = "#00FF00"
},false);

