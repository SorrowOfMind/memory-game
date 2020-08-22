const board = document.getElementById('board');
const points = document.getElementById('points');
const modal = document.getElementById('modal');
const play = document.getElementById('play');
let currentCards = [];
let score = 0;

const createCards = (arr) => {
    let availableCards = Array.from({length: 12}, (val, idx) => idx); //[0,1,2,3,4,5,6,7,8,9,10,11]
    let i = 0;
    while (i < arr.length) {
        const id = placeCards(availableCards);
        let card = `<div class="flip-box"><div class="card">
            <div class="card-back"><img data-name=${cards[id].name} data-id=${i} src="./assets/back.png" id="backface"></div>
            <div class="card-front"><img data-name=${cards[id].name} data-id=${i} src=${cards[id].img}></div>
            </div></div>`;
        board.insertAdjacentHTML('beforeend', card);
        i++;
    }
    board.addEventListener('click', flip);
}

const flip = e => {
    if (e.target && e.target.id === 'backface') {
        const {name} = e.target.dataset;
        const {id} = e.target.dataset;
        const flippedCard = e.target.parentElement.parentElement;
        swapClasses(flippedCard, 'flip-card-back', 'flip-card');
        currentCards.push({id, name});
        if (currentCards.length === 2) {
            const openCards = [...document.querySelectorAll('.flip-card')];
            if(checkForMatch(currentCards)) {
                score += 10;
                points.textContent = score;
                currentCards = [];
                setTimeout(() => openCards.forEach(card => card.classList.add('hidden')), 1000);
            } else {
                currentCards = [];
                setTimeout(() => openCards.forEach(card => swapClasses(card, 'flip-card', 'flip-card-back')), 1000);
            }
        }
        if (score === 60) {
            setTimeout(() => {
                modal.classList.remove('hidden');
            }, 1000);
        }
    }
};

const swapClasses = (el, classRemove, classAdd) => {
    el.classList.remove(classRemove);
    el.classList.add(classAdd);
}

const checkForMatch = arr => arr[0].name === arr[1].name;

const placeCards = (available) => {
    let idx = random(0, available.length - 1);
    let id = available[idx];
    available.splice(idx, 1);
    return id;
}

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

createCards(cards);

play.addEventListener('click', () => {
    window.location.reload();
})