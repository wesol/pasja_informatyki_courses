let cards = ["ciri.png", "geralt.png", "jaskier.png", "iorweth.png", "triss.png", "yen.png"];


let cardsOnBoard = randomCards(cards);

let c0 = document.getElementById('c0');
let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');

let c4 = document.getElementById('c4');
let c5 = document.getElementById('c5');
let c6 = document.getElementById('c6');
let c7 = document.getElementById('c7');

let c8 = document.getElementById('c8');
let c9 = document.getElementById('c9');
let c10 = document.getElementById('c10');
let c11 = document.getElementById('c11');

c0.addEventListener("click", () => {revealCard(0)});
c1.addEventListener("click", () => {revealCard(1)});
c2.addEventListener("click", () => {revealCard(2)});
c3.addEventListener("click", () => {revealCard(3)});

c4.addEventListener("click", () => {revealCard(4)});
c5.addEventListener("click", () => {revealCard(5)});
c6.addEventListener("click", () => {revealCard(6)});
c7.addEventListener("click", () => {revealCard(7)});

c8.addEventListener("click", () => {revealCard(8)});
c9.addEventListener("click", () => {revealCard(9)});
c10.addEventListener("click", () => {revealCard(10)});
c11.addEventListener("click", () => {revealCard(11)});

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