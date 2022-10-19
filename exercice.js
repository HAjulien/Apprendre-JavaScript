// let start = 'Bonjour tout le monde';

// alert(start);

// prenom= prompt('Quel est votre prénom ?');

// alert(`Bonjour ${prenom}`);

// chiffre1= parseInt(prompt('choisissez un chiffre'));
// chiffre2= parseInt(prompt('choisissez un  deuxiemme chiffre'));

// let result = chiffre1 + chiffre2;
// alert(`le resultat est ${result}`);

let age = "";
age = parseInt(prompt("quel est votre age"));
if (age < 18 || userage > 120) {
  alert("vous avez fait une erreur");
  age = parseInt(prompt("quel est votre age"));
} else {
  alert("c est bon");
}

let userage = parseInt(prompt("Entrer votre âge"));
if (isNaN(userage) || userage <= 0 || userage > 120) {
  alert("Age non valide");
  document.write("saisir correctement age <a href='exercice.html'>ok</a> ");
} else {
  alert(userage + " est valide");
}

userage = 0;
do {
  userage = parseInt(prompt("votre age"));
  if (userage >= 18 && userage < 120) {
    alert("age valide : vous etes majeur");
  } else if (userage > 0 && userage < 18) {
    alert("vous etes mineur");
  } else {
    alert("age non valide");
  }
} while (isNaN(userage) || userage <= 0 || userage > 120);

alert("Vous avez " + userage + " age");
