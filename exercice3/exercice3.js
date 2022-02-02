
function inverse(){
    let nombre =prompt("veuillez choisir un nombre: ");
    let valeur = nombre.split('').reverse('').join(''); 
    alert(valeur);
};

inverse();

//---------------------------------------------------------------------------------------------------------------------------------------

function alphabetique(){
    let mot =prompt("veuillez choisir un mot: ");
    let alpha = mot.split('').sort().join(''); 
    alert(alpha);
};

alphabetique();

//----------------------------------------------------------------------------------------------------------------------------------------

