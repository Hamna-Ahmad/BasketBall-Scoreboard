let countHome = 0;
let countGuest = 0;

let countHomeEl = document.getElementById("homeNum");
let countGuestEl = document.getElementById("guestNum");

// Home 
function homeAdd1() {
    countHome += 1;
    countHomeEl.textContent = countHome;
}

function homeAdd2() {
    countHome += 2;
    countHomeEl.textContent = countHome;
}

function homeAdd3() {
    countHome += 3;
    countHomeEl.textContent = countHome;
}

//Guest

function guestAdd1() {
    countGuest += 1;
    countGuestEl.textContent = countGuest;
}

function guestAdd2() {
    countGuest += 2;
    countGuestEl.textContent = countGuest;
}

function guestAdd3() {
    countGuest += 3;
    countGuestEl.textContent = countGuest;
}

//New Game 
function newGame() {
    countHomeEl.textContent = 0;
    countGuestEl.textContent = 0;
    countGuest = 0;
    countHome = 0;
}