// let div= document.getElementById('myDiv');
// alert(div);

// let query = document.querySelector('#menu .item span');
// alert(query.innerHTML); //Affiche element 1

let queryAll = document.querySelectorAll('#menu .item span');
//alert(queryAll.length); //affiche 2

//alert(queryAll[0].innerHTML + ' - ' + queryAll[1].innerHTML); //Afiche élément 1 et élément 2

for(let index=0, items=queryAll.length; index < items; index++){
    //alert( queryAll[index].innerHTML);         //.innerHTML pour récupérer le contenu des éléments
}

let t = "couleur dynamique";
css = "background-color: green; color: white; padding: 10px 15px;"
console.log(`%c ${t}` , css);

const persons = [
{
    id: 0,
    nom : 'tom',
    age : 42
},
{
    id: 1,
    nom : 'Arthur',
    age : 23
},
{
    id: 2,
    nom : 'Henry',
    age : 76
},
{
    id: 3,
    nom: 'Charlize',
    age: 102
}
]

const personEnPlus = { id: 4, nom: 'Xavier', age: 94};
const neveuxEnPlus = [
    {
        id: 5,
        nom: 'Lisa',
        age: 14
    },
    {
        id : 6,
        nom : 'Louis',
        age: 19,
    }
];

console.log(`%c ${persons[0].nom}`, css);
// const array2 = person.sort((a,b) => b.age - a.age)
// console.table(array2);

const array2 = persons.map( person => person.age);
const personsOrderByAge = [...persons, personEnPlus, ...neveuxEnPlus].sort((a,b) => b.age - a.age );
console.table(array2);
//sort modifie le tableau original attention
console.table(personsOrderByAge);
console.table(persons);

const PersonMaxAge = array2.reduce((acc, ele) => Math.max(acc,ele));

function log({age, nom}){
    console.log(` Mon nom est ${nom}, j'ai ${age} ans.`);
}

log(neveuxEnPlus[0]);

persons.forEach(person => {
    log(person)
});

const numberArray = [7, 1, 2, 12, 4, 4, 3, 12, 12, 7];

const test = numberArray.findIndex( element => element === 3)

numberArray.forEach( nb => {
    let firstIndex = numberArray.findIndex(element => element === nb);
    let lastIndex = numberArray.lastIndexOf(nb);
    if ( firstIndex === lastIndex) console.log(numberArray[firstIndex]);
})

const SingleNumberArray = numberArray.filter( nb => {
    let firstIndex = numberArray.findIndex(element => element === nb);
    let lastIndex = numberArray.lastIndexOf(nb);

    return firstIndex === lastIndex
})
console.log(`les nombres uniques sont : ${SingleNumberArray}`);

const duplicateNumberArray = numberArray.filter( (nb, index) => {

    const firstIndex = numberArray.findIndex(element => element === nb);
    const lastIndex = numberArray.lastIndexOf(nb);
    const uniqueDuplicateNumber = ( numberArray.indexOf(nb) == index )

    if (uniqueDuplicateNumber) return firstIndex != lastIndex
})

console.log(`les nombres dupliqué sont : ${duplicateNumberArray}`);


// const cleanDuplicateNumberArray = [...new Set(duplicateNumberArray)]

// const cleanDuplicateNumberArray = duplicateNumberArray.filter( (nb, index) => {
//     return duplicateNumberArray.indexOf(nb) ==  index
// })

//console.log(cleanDuplicateNumberArray);

const arrayTest = [1, 4, 8, [23, 41, [12,83, 76]]]

const arrayTestFlat = arrayTest.flat(2)
console.log(arrayTestFlat);

const texte1 = 'le chien et le chat sont dans la maisonnette';
//const texte2 = texte1.replace('chien', '').replace('chat', '');
//console.log(texte2);

const tableauMot = ['chien', 'chat', 'maisonnette']

function findAndReplace(texte) {

        tableauMot.forEach( word => {

            let motCensurer = ''
            for( let i = 0; i < word.length; i ++){
                motCensurer += "*"
            }
            //console.log(motCensurer);
            texte = texte.replace( word, motCensurer);
        });
        return texte

}

const text1Clean = findAndReplace(texte1)
console.log(text1Clean);
console.log(texte1);

//----------------------------------------------------------------------------------------------------------------------

const moyenne = (notes) => {
    sumNotes = notes.reduce((acc, ele) => acc + ele);
    return (sumNotes /notes.length).toFixed(2);
}

const checkNotesArray = (values) => {
    const isArray = Array.isArray(values);
    if (!isArray) { return console.log("tableau exigé"), false};
    
    const allNumber0to20 = (note) => typeof note === 'number' && note >= 0 && note <= 20;
    
    if (!values.every(allNumber0to20)) {return console.log("une note ne respecte pas les conditions (chiffre 0 et 20)"), false};

    return true
};

class Student {
    ecole = "Jules Ferry"
    _notes = [];
    constructor(firstName, lastName){
        this.firstName = firstName,
        this.lastName = lastName
    }

    //setter
    set notes (v){
        if (Array.isArray(v)) this._notes = v
    }

    //getter
    get name(){
        return `${this.firstName} ${this.lastName}`
    }

    //methodes
    canPass() {
        return moyenne(this._notes) >= Student.moyenne
    }

    addNotes(values) {

        if( !checkNotesArray(values) ) return console.log("impossible d'ajouter une/des notes");

        console.log( `notes ${values.join(", ")} ont été ajoutées` );
        return this._notes = [...this._notes, ...values]
    }

    //static
    static moyenne = 10
}

class SuperStudent extends Student {
    constructor(firstName, lastName, notes){
        super(firstName, lastName)
        this._notes = notes
    }

    get name () {
        return `Super ${super.name}`
    }

    canPass(){
        return true
    }
}


const john = new SuperStudent('John', 'Doe', [1, 4, 9]);
const jane = new Student('Jane', 'Doe');
jane.notes = [12, 14, 12];
jane.addNotes([12,12]);

console.log(jane.name);
console.log(john.name);

function resultat(student){
    if( !(student instanceof Student)) return console.log(`Vous n'etes pas un éleve de cette école`);
    if(!student.canPass()) return console.log(`Désolé ${student.name}. Votre moyenne est trop basse pour passer au CM2.` );
    console.log(`Vous pouvez passer en CM2. Felicitations ${student.name}!!!`);
}

resultat('test');
resultat(john);
resultat(jane);

