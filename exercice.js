// let start = 'Bonjour tout le monde';

// alert(start);

// prenom= prompt('Quel est votre prénom ?');

// alert(`Bonjour ${prenom}`);


// chiffre1= parseInt(prompt('choisissez un chiffre'));
// chiffre2= parseInt(prompt('choisissez un  deuxiemme chiffre'));

// let result = chiffre1 + chiffre2;
// alert(`le resultat est ${result}`);
let age = "";
age = parseInt(prompt('quel est votre age'));

if (age < 18 ){
    alert('vous avez fait une erreur')
    age = parseInt(prompt('quel est votre age'));
} else{
    alert('c est bon')
};