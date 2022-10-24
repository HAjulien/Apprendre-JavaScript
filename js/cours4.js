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

    //crée une methode pour ajouter ami push pour tableau

    addFriends(nick, age, sex, parent, work, friends){
        this.friends.push(new Person(nick, age, sex, parent, work, friends));
    }
};


//on assigne des propiétés a la variable seb
let seb = new Person ('Sébastien', 25,'m', 'aîné', 'développeur', []);
alert(seb.nick);


seb.nick = 'Bastien';
seb.age = 23; //change la valeur age

alert(seb.nick + ' a ' + seb.age + ' ans.');
 
seb.addFriends('William', 19, 'm', 'aîné', 'Développer', []);
seb.addFriends('Jonathan', 19, 'm', 'aîné', 'Développer', []);
seb.addFriends('Thomas', 19, 'm', 'aîné', 'Développer', []);

alert(seb.friends[0].nick + ' à ' + seb.friends[0].age + ' ans.');

// seb.friends.push(new Person('William', 19, 'm', 'aîné', 'Développer', []))
// seb.friends.push(new Person('Jonathan', 19, 'm', 'aîné', 'Développer', []))
// seb.friends.push(new Person('Thomas', 19, 'm', 'aîné', 'Développer', []))


 let machaine = "c'est un test";
let montableau = machaine.split(' ');

for(let i=0; i<montableau.length; i++ ){
     console.log(montableau[i] + '\n');
 };

// let myString = 'C\'est un test';
// let myArray = myString.split(' ');

// lenght = myArray.length;

// for(var i=0; i<length; i++){
//     console.log('Index : ' +i+ '\n' + 'valeur : ' + myArray[i]);
//     console.log('\n' + myArray[i]);
// };

// let myArray = ["c'est", "un", "test"];
// myArray.forEach(function(value, index){
//     console.log('index: ' +index+ '\n' +'valeur : ' + value);
//     console.log('\n' + value);
// });

let myArray = ["c'est", "un", "test"];
myArray.forEach(element => console.log('\n' + element));


//convert array to object------------------------------------------------

const personalityArray = ['alan', 'tim', 'robert', 'alex']

//with loop
const personalityObjet ={}

personalityArray.forEach( (person, index) =>{
    personalityObjet['key'+ index] = person
})

console.log(personalityObjet);

//2eme methode

const personalityObjet2 = Object.assign({}, personalityArray)
console.log(personalityObjet2);

//reduce

const personalityObjet3 = personalityArray.reduce((acc, person, index ) => {
    return {...acc, ['key' + index] : person}
}, {})
console.log(personalityObjet3);

//spread operator

const personalityObjet4 = {...personalityArray}
console.log(personalityObjet4)

//object to array----------------------------------------------------------------------

const arrayToObject = [
    ['firstName', 'arthur'],
    ['lastName', 'Jean'],
    ['sport', ['natation', 'handball']]
]

const objectFromArray = Object.fromEntries(arrayToObject)

console.log(objectFromArray);