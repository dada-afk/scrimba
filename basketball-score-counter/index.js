let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let scoreH = 0;
let scoreG = 0;

let homeAddOne = document.getElementById("home-add-one");
let homeAddTwo = document.getElementById("home-add-two");
let homeAddThree = document.getElementById("home-add-three");

let guestAddOne = document.getElementById("guest-add-one");
let guestAddTwo = document.getElementById("guest-add-two");
let guestAddThree = document.getElementById("guest-add-three");

function addOneToHome() {
    scoreH += 1;
    homeScore.innerText = scoreH;
    leader();
}

function addTwoToHome() {
    scoreH += 2;
    homeScore.innerText = scoreH;
    leader();
}

function addThreeToHome() {
    scoreH += 3;
    homeScore.innerText = scoreH;
    leader();
}


function addOneToGuest() {
    scoreG += 1;
    guestScore.innerText = scoreG;
    leader();
}

function addTwoToGuest() {
    scoreG += 2;
    guestScore.innerText = scoreG;
    leader();
}

function addThreeToGuest() {
    scoreG += 3;
    guestScore.innerText = scoreG;
    leader();
}


function newGame() {
    scoreH = 0;
    scoreG = 0;
    homeScore.innerText = scoreH;
    guestScore.innerText = scoreG;
    homeScore.style.color = "#F94F6D";
    guestScore.style.color = "#F94F6D";
}


function leader() {
    if(scoreH > scoreG) {
        homeScore.style.color = "#34D399";
        guestScore.style.color = "#F94F6D";
    } else if(scoreG > scoreH) {
        guestScore.style.color = "#34D399"
        homeScore.style.color = "#F94F6D";
    } else if(scoreG = scoreH) {
        guestScore.style.color = "#FBBF24"
        homeScore.style.color = "#FBBF24";
    }
}

