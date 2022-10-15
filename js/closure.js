//ouvrir avec QOUKKA

function closure(){
    let a = 10
    console.log(a);

    return () =>{
        a = a + 2
        console.log(a);
    }
}

let c = closure()
c()
c()

function getDays() {
    let days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    //optimisation de la memoire , seul getNomJours et appele plusieurs fois
    console.log('getDay');

    return getNomJours = () => {
        let d = new Date();
        console.log(days[d.getDay()]);
    }

}

let f = getDays();
f();
f();
f();
