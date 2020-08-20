const board = document.getElementById('board');

const createBlanks = (arr) => {
    let i = 0;
    while (i < arr.length * 2) {
        let card = document.createElement('img');
        card.setAttribute('src', './assets/back.png');
        card.classList.add('back');
        card.dataset.id = i;
        board.appendChild(card);
        card.addEventListener('click', flip);
        i++;
    }
}

const flip = () => console.log('flipped');


createBlanks(cards);