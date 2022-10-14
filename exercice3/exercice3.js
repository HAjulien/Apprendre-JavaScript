
function inverse(){
    let nombre =prompt("veuillez choisir un nombre: ");
    let valeur = nombre.split('').reverse('').join(''); 
    alert(valeur);
};

// inverse();

//---------------------------------------------------------------------------------------------------------------------------------------

function alphabetique(){
    let mot =prompt("veuillez choisir un mot: ");
    let alpha = mot.split('').sort().join(''); 
    alert(alpha);
};

// alphabetique();

//----------------------------------------------------------------------------------------------------------------------------------------


function maj(){
    let min =prompt("veuillez choisir un mot: ");
    let maj = min.charAt(0).toUpperCase();
    alert(maj);
};

//maj();

//----------------------------------------------------------------------------------------------------------------------------------------

const createLocalStorageVariableExpiry = (key, value, delayExpirationMS) =>{
    const now = new Date().getTime();
    const item = {
        value: value,
        expiryTime: now + delayExpirationMS,
    };
    localStorage.setItem(key, JSON.stringify(item))
};

const getLocalStorageVariable = (key) =>{
    const itemStr = localStorage.getItem(key);

    if(!itemStr) return null

    const item = JSON.parse(itemStr);
    const now = new Date().getTime();

    if (now > item.expiryTime) {
        localStorage.removeItem(key);
        return null
    }
    return item.value;
};

const btn = document.querySelector('.btn');

getLocalStorageVariable("nom");
console.log(localStorage.getItem("nom"));


btn.addEventListener("click", () => {
    createLocalStorageVariableExpiry("nom", "john", 100000);
});

//comparaison tableau--------------------------------------------------------------------------------------

const arrayTest1 = [ "a", "b", "c", "d", "a", 2, 12]
const arrayTest2 = ["b", "a", "c", "d","a", 12, 2]

function isArrayEgal(){
    let array1ToString = JSON.stringify(arrayTest1.sort());
    let array2ToString = JSON.stringify(arrayTest2.sort());
    console.log( array1ToString);
    console.log( array2ToString);

    if (array1ToString === array2ToString) {
        console.log("ils sont egaux");
        return true;
    } else {
        console.log("il ne sont pas egaux");
        return false;
    }
}

console.log(isArrayEgal());