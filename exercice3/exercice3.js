
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

const localStorageVariableExpiry = (key, value, delayExpiration) =>{
    const now = new Date ();
    const item = {
        value: value,
        expiry: now.getTime() + delayExpiration,
    };
    localStorage.setItem(key, JSON.stringify(item))
};

const getLocalStorageVariable = (key) =>{
    const itemStr = localStorage.getItem(key);

    if(!itemStr) return null

    const item = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null
    }
    return item.value;
};

const btn = document.querySelector('.btn');

getLocalStorageVariable("nom");
console.log(localStorage.getItem("nom"));


btn.addEventListener("click", () => {
    localStorageVariableExpiry("nom", "john", 10000);
    console.log("test");
});