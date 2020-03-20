let cards = ["ciri.png", "geralt.png", "jaskier.png", "iorweth.png", "triss.png", "yen.png",
             "ciri.png", "geralt.png", "jaskier.png", "iorweth.png", "triss.png", "yen.png"];

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

let oneVisible = false;
let turnCounter = 0;

function revealCard(nr) {

    // alert(nr);
    let img = "url(img/" + cards[nr]+ ")";

}