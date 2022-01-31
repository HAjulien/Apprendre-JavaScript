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