// alert('Hello World');
/* document.open();
 rajoute texte comme print*/
document.write('<p class=para> Bonjour le monde ! </p>');
// document.close();


// let start = 'Bonjour ',
// prenom = '', end =' !',
// result;

// prenom= prompt('Quel est votre prénom ?');
// result = start + prenom + end;
// alert(result);

// console.log(result);

// document.open();
// document.write("<div id='monid'>" + result + "</div>");
// ducument.close();

let myArrey2 = ['sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];

alert(myArrey2.length);

for(let index=0, items=myArrey2.length; index < items; index++){
    alert( myArrey2[index]);
}



// let family = {};

let family = {
    self: 'Patrick',
    sister: 'Laurence',
    brother: 'Ludovic',
    cousin_1: 'Pauline',
    cousins_2: 'Guillaume'
};

alert(family['cousin_1']);
alert(family['brother']);

// 2 possibilité de recuperer la valeur la propriete plutot le . pour maintement

alert(family.cousins_2);
alert(family.brother);