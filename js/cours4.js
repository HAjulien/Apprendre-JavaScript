//changer les liens hypertext

// let link = document.getElementById('mylink');

// let hyperlien = link.href;
// alert(hyperlien);
// 

let link = document.getElementById('mylink');
//utilise getter pour recuperer acceseur
let hyperlink = link.getAttribute('href');

alert(hyperlink);
//utilise setter pour modifier initiateur/mutateur
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

//creer un objet
class Calcul{
    constructor (var1, var2){
        this.produit = var1 * var2;
    }
};
alert (new Calcul(4,5).produit);
//let calcul1 = new Calcul (4,5).produit;
//alert(calcul);


//on crée objet Person
class Person{
    constructor (nick, age, sex, parent, work, friends){
        this.nick = nick;
        this.age = age;
        this.sex = sex;                       //getters
        this.parent = parent;
        this.work = work;
        this.friends = friends;
    }
};


//on assigne des propiétés a la variable seb
let seb = new Person ('Sébastien', 25,'m', 'aîné', 'développeur', []);
alert(seb.nick);


seb.nick = 'Bastien';
seb.age = 23; //change la valeur age

alert(seb.nick + ' a ' + seb.age + ' ans.');

//crée une methode pour ajouter ami


