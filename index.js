const board = document.getElementById('board');

const createCards = (arr) => {
    let takenId = [];
    let i = 0;
    while (i < arr.length * 2) {
        let getId = random(0,5);
        takenId.push(random);
        console.log(getId);
        let card = `<div class="flip-box"><div class="card">
            <div class="card-back"><img data-id=${i} src="./assets/back.png" id="backface"></div>
            <div class="card-front"><img data-id=${i} src=${cards[getId].img}></div>
            </div></div>`;
        board.insertAdjacentHTML('beforeend', card);
        i++;
    }
    board.addEventListener('click', flip);
}

const flip = e => {
    if (e.target && e.target.id === 'backface') {
        e.target.parentElement.parentElement.classList.add('flip-card');
    }
};

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


createCards(cards);