const gridContainer = document.querySelector('.grid-container'),
watcher = document.querySelector('.intersection-watcher');

const fetchData = async () => {
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await result.json()
        //console.log(data);
        return data
    } catch (error) {
        alert(error)
    }
};


const addContent = async () => {
    const data = await fetchData();

    /* for (let i = 0; i < 30; i++) {
        const card = document.createElement('div');
        card.className = "card";
        card.innerHTML = `<h2>Lorem Hello world</h2>`;
        gridContainer.appendChild(card);
    } */

    data.forEach( post => {
        const card = document.createElement('div');
        card.className = "card";
        card.innerHTML = `<h2>${post.title}</h2>`;
        gridContainer.appendChild(card);
    });
};

addContent(); //pas obligatoire

const handleIntersect = entries => {
    //console.log(entries);
    if(entries[0].isIntersecting) addContent()
};

const options = {
    // root : null,
    //threshold: 1,
    //rootMargin: "-20% 0px"
}

const newObserver = new IntersectionObserver(handleIntersect, options);

newObserver.observe(watcher);