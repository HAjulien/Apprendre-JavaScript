let Person = {
    nick : 'Sébastien',
    age : 25,
    sex : 'm',
    parent : 'aîné',
    work : 'Développeur'
};

for (let proprety in Person) {
    console.log(`${proprety} => ${Person[proprety]}`);
};

let AnimalsArray = ["cat", "dog", "fish"];

for (let value of AnimalsArray){
    console.log(value);
};

// Destructuring Array and objet -----------------------------------------------------------------------------------------

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
number = [1, 2, 3, 4, 5, 6]

//recuperer seulement les 3 premieres valeur puis le reste dans le variable rest
const [a, b ,c, ...rest ] = alphabet;

console.log(a);
console.log(b);
console.log(c);
console.log(rest);

//concatenation des 2 tableaux
const newArray = [...alphabet, ...number];
const newArray2 = [...number, c, ...alphabet]
console.log(newArray);
console.log(newArray2);


const sumAndMultiply = (a,b) => [a + b, a * b, (a/b).toFixed(2) ];

//const array = sumAndMultiply(2,3);
//console.log(array);

//destructure le tableau obtenue en variable
const [sum, multiply, division = 'no Division'] = sumAndMultiply(2,3);

console.log(sum);
console.log(multiply);
console.log(division); //valeur par defaut 'no division'

// manipulatiob=n avec les objet--------------------------------------------------

const personOne = {
    nom: 'kyle',
    age: 24,
    favoriteFood: 'waterMelon',
    address: {
        city : 'somewhere',
        state: 'One of them'
    }
}

const personTwo = {
    nom: 'Sully',
    age: 32,
    address: {
        city : 'somewhere else',
        state: 'Another One of them'
    }
}
//seulement nom et age, les keys doivent correspondre  nom: change le nom variable
const { nom: firstName, age, favoriteFood = 'rice', address: { city, state} } = personOne 

console.log(firstName);
console.log(firstName, age , city );
console.log(favoriteFood);
console.log(city);
console.log(state);

const MoreInfo = {
    sex : 'Man',
    hobbies: {
        sport : 'running and tennis',
        movie : 'Titanic',
        music : 'ACDC'
    }
}
//fusion 2 objet, si il y a les meme cle dans objet 1 et 2, alors les valeur cle objet 1 sont remplace par ceux du 2
const personFour = { ...personOne, ...MoreInfo};
console.log(personFour);

/* const printUser = (user) => {
    console.log(`Name is ${user.nom} and age is ${user.age} `);
};
 */

///destruturing personFour in argument on function

const printUser = ({nom , age, hobbies: {sport, music} }) => {
    console.log(`Name is ${nom} and age is ${age}. Favorites Sport are ${sport}`);
    console.log(`i listen ${music}`);
};
printUser(personFour)


const createdArticle = ({title, content}) => {
    const article = document.createElement('article')
    article.append(createdElementWithText('h2', title ))
    article.append(createdElementWithText('p', content ))
    return article
}

const createdElementWithText = (tagName, content) => {
    const element = document.createElement(tagName);
    element.innerText = content;
    return element
};

let baseURL = 'https//example.com'

const getData = async () => {
    try {
        const response = await fetch(`${baseURL}/posts`)
        if(!response.ok) throw new Error('une erreur est survenue')
        const posts = await response.json()

        posts.forEach(post => {
            wrapper.append(createdArticle(post))
        })
        
    } catch (error) {
        console.error(error)
        alert(error)
    }
};

getData()
