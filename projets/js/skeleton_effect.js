const cardsGrid = document.querySelector('.cards-grid'),
cards = document.querySelectorAll('.card');

const loadContent = async () => {
    try {
        const results = await fetch("https://picsum.photos/v2/list");
        const data = await results.json();
        //console.log(data); setitmeout pour laisser le temps de montrer l'effet skeleton
        setTimeout(() => {
            createCards(data)
        }, 4000)
    } catch (error) {
        console.log(error);
        alert('donner non trouve')
    }
};

loadContent();

const createCards = (data) => {

    let cardsList = '';
    cards.forEach((card,index)  => {
        //console.log(index);
        const newCard = `
        <div class="card">
            <img src="${data[index].download_url}" class="top-img"/>
            <div class="content">
                <h3 class="card-title">Lorem ipsum dolor sit amet.</h3>
                <p class="card-text"> Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum.</p>
                <p class="card-text"> Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        `
        cardsList += newCard;
    });
    cardsGrid.innerHTML = cardsList;
};