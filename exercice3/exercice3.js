
function inverse(){
    let nombre =prompt("veuillez choisir un nombre: ");
    let valeur = nombre.split('').reverse('').join(''); 
    alert(valeur);
};

// inverse();

//hideString----------------------------------------------------------------------------------------------

/**
 * 
 * @param {string} number 
 * @param {number} lastNumbersVisibles 
 * @returns {string}
 */
function hideCreditCard(number, lastXNumbersVisibles) {
    const numberNoTiret = number.replace(/-/g, '');
    return numberNoTiret.slice(-lastXNumbersVisibles).padStart(numberNoTiret.length, '*')
}

console.log(hideCreditCard("5555-3333-0909", 4));

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

//LocalStorage with Expiration Time----------------------------------------------------------------------------------------------------------------------------------------

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

//getLocalStorageVariable("nom");
//console.log(localStorage.getItem("nom"));


btn.addEventListener("click", () => {
    createLocalStorageVariableExpiry("nom", "john", 100000);
});

//comparaison tableau--------------------------------------------------------------------------------------

const arrayTest1 = [ "a", "b", "c", "d", "a", 2, 12]
const arrayTest2 = ["b", "a", "c", "d","a", 12, 2]

function isArrayEqual(){
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

console.log(isArrayEqual());

//Dénominateur commun le plus grand--------------------------------------------------------------------------------------------------------

const findDenominateur = document.querySelector('.findDenominateur'),
demoninateurText = document.querySelector('.denominateur'),
number1Input = document.querySelector('#nombre1'),
number2Input = document.querySelector('#nombre2')

function plusGrandDenominateur(number1, number2) {

    if(isNaN(number1) || isNaN(number2)) return demoninateurText.innerText = "que des chiffres autorisés"
    if(number1 <= 0 || number2 <= 0 ) return demoninateurText.innerText ='que des nombres strictement supérieures à 0 autorisé'
    if (number1 === number2 ) return demoninateurText.innerText = `Le plus grand dénomateur est ${number1}`

    const numberMax = Math.max(number1, number2),
    numberMin= Math.min(number1, number2)

    let demoninateur = numberMin;

    while( demoninateur > 0){
        if ( (numberMax % demoninateur) === 0 && (numberMin % demoninateur) === 0){
            break
        }
        demoninateur--
    }

    return demoninateurText.innerText = `Le plus grand dénominateur est ${demoninateur}`
}

findDenominateur.addEventListener('click', function (){
    plusGrandDenominateur( +(number1Input.value), +(number2Input.value));

});


//Création liste ingrédient quantité modifiable à partir d'un array object---------------------------------------------------
const objetIngredients = [
    {
        produit: 'lait',
        quantite: 200,
        mesure: 'ml'
    },
    {
        produit: 'oeuf',
        quantite: 1,
        mesure: 'gros calibre'
    },
    {
        produit: 'farine',
        quantite: 100,
        mesure: 'gr'
    },
    {
        produit: 'sucre',
        quantite: 20,
        mesure: 'gr'
    },
    {
        produit: 'sel',
        quantite: 3,
        mesure: 'gr'
    },
    {
        produit : 'feuille de menthe',
        quantite: 0.5
    }
    
]


const ingredients = document.querySelector('.ingredients')
const quantiteInput = document.querySelector('#quantite')

function createIngredientList( object, tagName ){
    object.forEach( ({quantite, produit, mesure = ""}) => {
        const element = document.createElement(tagName)
        element.classList.add('ingredient')
        element.innerText = `${produit} : ${(quantite * quantiteInput.value)} ${mesure}`
        ingredients.append(element)
    })
}

function updateQuantitePerIngredient(object, valueInput) {
    const listeIngredient = [...document.querySelectorAll('.ingredient')]

    object.forEach(({quantite, produit, mesure = ""}, index) => {

        let number = (quantite * valueInput).toFixed(1)
        const isNumberDontHaveDecimal = number.slice(-2) === '.0'
        if (isNumberDontHaveDecimal) number = number.slice(0, -2)

        listeIngredient[index].innerText = `${produit} : ${number} ${mesure}`
    })
}


createIngredientList(objetIngredients, "li")

quantiteInput.addEventListener('change', function (){
    updateQuantitePerIngredient(objetIngredients, quantite.value)
});

//NB ROMAIN---------------------------------------------------------------------------------------------
const nbRomainDef = {
    I : 1,
    V :5,
    X :10,
    L : 50,
    C : 100,
    D: 500,
    M: 1000
}

//1er facon de faire
function nbRomainToInt (nbRomain){
    let sum = 0
    for (let index = 0; index < nbRomain.length ; index++ ){

        let isLowerThanNextNumber = nbRomainDef[nbRomain[index]] < nbRomainDef[nbRomain[index + 1]]

        if (isLowerThanNextNumber) {
            sum -= nbRomainDef[nbRomain[index]] 
        }else{
            sum += nbRomainDef[nbRomain[index]] 
        }
    }
    return sum
}

//2eme facon de faire

function nbRomainToIntWithReduce (nbRomain){
    const array = nbRomain.split('')
    
    const sum = array.reduce( (acc, ele, index) => {
        let isLowerThanNextNumber = nbRomainDef[array[index]] < nbRomainDef[array[index + 1]]
        if (isLowerThanNextNumber) return acc -= nbRomainDef[ele]
        return  acc += nbRomainDef[ele]
    },0 )
    return sum
}

console.log(nbRomainToInt ("MCXLIV"))
console.log(nbRomainToIntWithReduce ("MCXLIV"))

//distributeur------------------------------------------------------------------------------------------

const distributeur = [500, 200, 100, 50, 20, 10, 5, 2, 1]

/**
 * @param {number} amount
 * @returns {object}
 */
function getBillets (amount) {
    const isAmountNotInteger = !Number.isInteger(amount)

    if (isAmountNotInteger) return 'le montant doit être un chiffre entier'
    if (amount <= 0) return 'le montant doit être supérieur à 0'
    
    const billetsAmount = distributeur.reduce( (acc, billet) => {
        if (amount - billet < 0) return acc

        let quotient = Math.floor( amount / billet )
        amount -= quotient * billet
        
        return acc = {...acc, [`${billet} euro`] : quotient} 
    },{})

    return billetsAmount
}

const monRetrait = getBillets(123)

console.log(monRetrait);


//chiffre que augmente jusqu'à la valeur choisi (impossible de l'arreter) ------------------------------------------------------------------------------------------------------------------------------------

const numberInput = document.querySelector('#number'),
nbIncreaseParagraphe = document.querySelector('.nbIncrease'),
btnNbIncrease = document.querySelector('.btnNbIncrease')

function increasingNumber(numberMax, numberMin) {
    if (isNaN(numberMax) || isNaN(numberMin)) return nbIncreaseParagraphe.innerText = 'veuillez indiquer un nombre valide'
    if (numberMin >= numberMax) return null

    numberMin++;
    nbIncreaseParagraphe.innerText = numberMin
    setTimeout(increasingNumber,10, numberMax, numberMin)
}

btnNbIncrease.addEventListener('click', function (){
    console.log( +numberInput.value);
    let numberMin = 0;
    increasingNumber(+numberInput.value, numberMin)
});
