let guest1Btn = document.getElementById("guest-btn1");
let guest2Btn = document.getElementById("guest-btn2");
let guest3Btn = document.getElementById("guest-btn3");
let home1Btn = document.getElementById("home-btn1");
let home2Btn = document.getElementById("home-btn2");
let home3Btn = document.getElementById("home-btn3");
let guestScore = document.querySelector(".guest-container .score-box span");
let homeScore = document.querySelector(".home-container .score-box span");
let resetBtn = document.getElementById("reset-btn");

let gScore = 0
let hScore = 0

guest1Btn.addEventListener("click", () => {
    gScore += 1;
    guestScore.textContent = gScore;
})
guest2Btn.addEventListener("click", () => {
    gScore += 2;
    guestScore.textContent = gScore;
})
guest3Btn.addEventListener("click", () => {
    gScore += 3;
    guestScore.textContent = gScore;
})
home1Btn.addEventListener("click", () => {
    hScore += 1;
    homeScore.textContent = hScore;
})
home2Btn.addEventListener("click", () => {
    hScore += 2;
    homeScore.textContent = hScore;
})
home3Btn.addEventListener("click", () => {
    hScore += 3;
    homeScore.textContent = hScore;
})

resetBtn.addEventListener("click", () => {
    gScore = 0;
    hScore = 0;
    guestScore.textContent = gScore;
    homeScore.textContent = hScore;
})