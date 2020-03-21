let cards = ["ciri.png", "geralt.png", "jaskier.png", "iorweth.png", "triss.png", "yen.png"];


let cardsOnBoard = randomCards(cards);

for (let i = 0; i < 12; i++) {

    const card = $('#cards');

    card.html(card.html() + '<div class="card" id="c' + i + '" onclick="revealCard(' + i + ')"></div>');

}

let turnCounter = 0;
let visibleNumber;
let hidedCards = 0;
let locked = false;

function revealCard(nr) {

    const $currCard = $('#c' + nr);

    if (+($currCard.css('opacity')) === 0
        || locked
        || !(($currCard.css('backgroundImage')).includes('img/karta.png'))) {

        return;
    }

    const tempVisibleNumber = visibleNumber;
    const img = "url(img/" + cardsOnBoard[nr] + ")";
    // alert(img);

    $currCard.addClass('activeCard').removeClass('card').css('backgroundImage', img);

    if (visibleNumber == null) {
        visibleNumber = nr;
    } else {
        if (cardsOnBoard[tempVisibleNumber] === cardsOnBoard[nr]) {

            setTimeout(() => {
                hide2Cards(nr, tempVisibleNumber)
            }, 750);
        } else {
            setTimeout(() => {
                reset2Cards(nr, tempVisibleNumber)
            }, 1000);
        }
        locked = true;
        turnCounter++;
        visibleNumber = null;
        $('.score').html('Turn counter: ' + turnCounter);

    }
}

function hide2Cards(...numbers) {

    for (const nr of numbers) {
        $('#c' + nr).css('opacity', 0);
    }

    hidedCards += 2;

    if (hidedCards === cardsOnBoard.length) {
        $('.board').html('<br><h1>You win!<br>Done in ' + turnCounter + ' turns</h1>')
    }

    locked = false;
}

function reset2Cards(...numbers) {

    for (const nr of numbers) {
        $('#c' + nr).css('backgroundImage', '').removeClass('activeCard').addClass('card');
    }

    locked = false;
}

function randomCards(cards) {

    let doubleCards = [];

    for (const i of cards) {
        doubleCards.push(i, i);
    }
    console.log(doubleCards);

    let randomArray = new Array(12);

    for (let i = 0; i < randomArray.length; i++) {

        const randomCardNumber = getRandomIntInclusive(0, doubleCards.length);
        randomArray[i] = doubleCards[randomCardNumber];
        doubleCards.splice(randomCardNumber, 1);
    }

    return randomArray;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}