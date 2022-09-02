const cards = document.querySelectorAll(".card");

let cardOne, cardTwo;
let disableDeck = false;
let matchedCard = 0;

// function flipCard(e){
//     console.log(e.target);
// };

const flipCard = (e) => {
    //console.log(e.target);
    if (disableDeck) return;
    let clickedCard = e.target;
    if (!cardOne) cardOne = clickedCard;
    if (clickedCard !== cardOne) {
        cardTwo = clickedCard;
        disableDeck = true;
        //console.log(cardOne, cardTwo);
        let cardOneImg = cardOne.querySelector('img').src,
        cardTwoImg = cardTwo.querySelector('img').src;
        matchCards(cardOneImg, cardTwoImg);
    }
    clickedCard.classList.add("flip");
    
}

const matchCards = (img1, img2) => {
    //console.log(img1, img2);
    if( img1 === img2) {
        matchedCard++;
        if (matchedCard === 8 ) return setTimeout(()=> { shuffleCard();}, 800);
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false; // stop function setTime won't run no error 
    }
    
    setTimeout( ()=>{
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400 );

    setTimeout( ()=>{
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;

    }, 900 );
}

const shuffleCard = () =>{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort( ()=> Math.random() > 0.5 ? 1 : -1 );
    matchedCard = 0; 
    cardOne = cardTwo = "";
    disableDeck = false;
    cards.forEach((card, index) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector("img");
        imgTag.src = `images/img-${arr[index]}.png`
        card.addEventListener("click", flipCard);
    })
}

shuffleCard();

cards.forEach( card => {
    card.addEventListener("click", flipCard);
});

