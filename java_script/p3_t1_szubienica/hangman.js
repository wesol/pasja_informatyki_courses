let sentence = "Bez pracy nie ma kołaczy";
let blankedSentence = "";
let numberOfFails = 0;
const maxNumberOfTries = 9;

const yes = new Audio("yes.wav");
const no = new Audio("no.wav");

let letters = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N",
               "Ń", "O", "Ó", "P", "Q", "R", "S", "Ś", "T", "U", "V", "W", "X", "Y", "Z", "Ż", "Ź"];

sentence = sentence.toUpperCase();

window.onload = start;


for (i = 0; i < sentence.length; i++) {

    if (sentence.charAt(i) === " ")
        blankedSentence += " ";
    else
        blankedSentence += "_";

}

function writeSentence() {

    document.getElementById("board").innerHTML = blankedSentence;

    if (numberOfFails >= maxNumberOfTries) {
        document.getElementById("alphabet").innerHTML =
            '<div>Niestety przegrałeś ...' +
            '<br><br>' +
            '<span class="reset" onclick="location.reload()">Jeszcze raz?</span>' +
            '</div>';

    } else if (sentence === blankedSentence) {
        document.getElementById("alphabet").innerHTML =
            '<div>Brawo! Udało Ci się odgadnąć hasło!' +
            '<br><br>' +
            '<span class="reset" onclick="location.reload()">Jeszcze raz?</span>' +
            '</div>';
    }
}

function start() {

    let divContent = "";

    for (let i = 0; i < 35; i++) {
        divContent += '<div id="letter' + i + '" class="letterBasic letter" onclick="checkLetter(' + i + ')" >' + letters[i] + '</div>';

        if ((i + 1) % 7 === 0)
            divContent += '<div style="clear: both"></div>'
    }

    document.getElementById("alphabet").innerHTML = divContent;

    writeSentence();
}

//adding new function at String class (only for this script)
String.prototype.replaceCharAtPosition = function (position, char) {
    if (position > this.length - 1)
        return this.toString;
    else
        return this.substr(0, position) + char + this.substr(position + 1);
};

function checkLetter(nr) {

    const clickedLetter = document.getElementById("letter" + nr);
    clickedLetter.removeAttribute("onclick");
    let hitFlagSuccess = false;

    for (let i = 0; i < sentence.length; i++) {

        if (sentence.charAt(i) === letters[nr]) {
            blankedSentence = blankedSentence.replaceCharAtPosition(i, letters[nr]);
            hitFlagSuccess = true;
        }
    }

    clickedLetter.classList.remove("letter");

    if (hitFlagSuccess) {
        yes.play();
        clickedLetter.classList.add("letterHitSuccess");
    } else {
        no.play();
        clickedLetter.classList.add("letterHitFail");
        numberOfFails++;
        document.getElementById("gibbet").innerHTML = '<img src="img/s' + numberOfFails + '.jpg" alt="s' + numberOfFails + '.jpg"/>'
    }

    writeSentence();
}
