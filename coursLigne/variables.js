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
let z = 4;

total2 = ++z;

console.log(total2);


//les comparateurs

let x = 2;
let y = 5;

if( x >= y){
    console.log("x est inférieur à y")
} else{
    console.log("x est supérieur à y")    
};

let a = 7;

if( x === a ) {              //on teste si x est false anec if(!x)
    console.log("true !")    //egalité === pour type et contenu jamais avec =,  == juste contenue.
}else if (x == a){
    console.log("x et a sont egaux en valeur")
}else{
    //console.log( x +" et "+ a+" ne sont pas du tout egaux");
    console.log(`${x} et ${a} ne sont pas du tout egaux`);
}



//function
//la function est déclaré elle ne se joue pas
function faireQuelqueChose(){
    console.log("je fais un truc");
    // return            permet de terminer la fonction
    console.log("trop cool");
}

//on appelle la function pour la joué
faireQuelqueChose();


//les fonction flêché

const faireUneTache = (tache) => {    //() il y a une valeur dynamique porte entré que l'on peur modifié  tache set juste un parametre
    console.log("je fais : " + tache);
};

faireUneTache('les course');     // (tache) est remplacé par 'les course'  
faireUneTache('le ménage');     // (tache) est remplacé par 'le ménage'

function calc(x, y){         //return retourne valeur
   return x + y;
}

//pour que la fonction joue toute seule pas besoin de l'appeller
(function () {
    console.log(`Je me joue toute seule` );
})();
//fonction anomyne

//deuxieme facon en flêché

(() => {
    console.log("je me joue aussi toute seule");
})();





//projet calculatrice


let result = 0;

function addition(c){
    result += c;  //on incrémente total et ensuite  il faut stocké le total
    return result;
}


function soustration(c){
    result -= c;  //on soustrait au total  et ensuite il faut stocké le total
    return result;
}


function division(c){
    if (result === 0 ){                  //pour ne pas avoir 0 quand on commence la division
        return (result = c) ;
        } else{  
        result /= c;  //on divise au total  et ensuite il faut stocké le total
        return result;
        }
    }


function multiplication(c){
    if (result === 0 ){                  //pour ne pas avoir 0 quand on commence la multiplication
        return (result = c) ;
        } else{   
        result *= c;  //on multiplie au total ensuite il faut stocké le total
        return result;
        }
    }

function reset() {
    result = 0;
}     