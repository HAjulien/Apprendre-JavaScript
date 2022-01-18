//element a droite donne sa valeur a l element a gauche

const prenom = "justine";

console.log(prenom);


let chiffre = 24;

chiffre = 30;

console.log(chiffre);

//concaténation avec +

let chaine = "je suis une chaine de caractère";
let nouvelleChaine = "le chiffre attendu est : " + chiffre + " degrés."
console.log(nouvelleChaine); 


//concaténation avec `` (alt gr + èè)

let exemple =`Le chiffre attendu est : ${chiffre} degrés.`;

console.log(exemple);

//les types de données
let string = "je suis une chaîne";
let number = 24;
let boolean = true;
let array = ["je", "suis", , 24, false]; //tableau
let objet = {
    prenom: "Audrey",
    age:34,
    ville: "Bordeaux",   //ville = index bordeaux = valeur
};

console.log(typeof array);  //pas de distinction entre tableau et objet

//on peur definir nom variable au debut pour leur donner une valeur plus tard ils sont undefined.

let arbre = null;

console.log(typeof arbre); //nul est type objet


let total = 2;
total = total + 1;
++total // total++ 
total--

total +=5  //rajoute 5 en une fois
total /=1  //raccourci division
total *=2   //raccourci multiplication


console.log(total);

let total2 = 2;
let x = 4;

total2 = ++x;

console.log(total2);
