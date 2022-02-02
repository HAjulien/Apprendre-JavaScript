let nombre =prompt("veuillez choisir un nombre: ");

let splitted = nombre.split('');
splitted = splitted.reverse();
let reverseNombre = splitted.join('');

alert(reverseNombre);
