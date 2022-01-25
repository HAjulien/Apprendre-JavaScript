// let div= document.getElementById('myDiv');
// alert(div);

// let query = document.querySelector('#menu .item span');
// alert(query.innerHTML); //Affiche element 1

let queryAll = document.querySelectorAll('#menu .item span');
alert(queryAll.length); //affiche 2

alert(queryAll[0].innerHTML + ' - ' + queryAll[1].innerHTML); //Afiche élément 1 et élément 2

for(let index=0, items=queryAll.length; index < items; index++){
    alert( queryAll[index].innerHTML);         //.innerHTML pour récupérer le contenu des éléments
}


let link = document.getElementById('mylink');

let hyperlien = link.href, hyperlien = "ww.google.fr";