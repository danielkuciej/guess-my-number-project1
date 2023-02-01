"use strict";

//Elements
const message = document.querySelector(".message");
const check = document.querySelector(".check");
const number = document.querySelector(".number");
const header = document.querySelector(".header");
const again = document.querySelector(".again");

//Variables
let gameNumber = Math.trunc(Math.random() * 30) + 1;
let score = 30;
let highscore = 0;

//Functions
const displayMessage = function (mess) {
  message.textContent = mess;
};

const gameMechanism = function () {
  const guess = Number(document.querySelector(".guess").value);

  //When is no number
  if (!guess) {
    message.textContent = "⛔️ No number";

    //When the number is correct
  } else if (guess === gameNumber) {
    displayMessage("🏆 Correct number");

    //Change beckground color
    document.body.style.backgroundColor = "#60b347";

    //Highscore update
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //Game number section
    number.style.width = "25rem";
    number.style.backgroundColor = "#FFD700";
    number.textContent = gameNumber;
    header.style.borderBottomColor = "FFD700";

    //When the number is wrong
  } else if (guess !== gameNumber) {
    if (score > 1) {
      displayMessage(
        guess > gameNumber
          ? "Your number is too high ⬆️"
          : "Your number is too low ⬇️"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("Game Over ☠️");
      document.body.style.backgroundColor = "rgb(220, 32, 32)";
      document.querySelector(".score").textContent = 0;
    }
  }
};

const againMechanism = function () {
  //Reset score
  score = 30;

  //New random number
  gameNumber = Math.trunc(Math.random() * 30) + 1;

  //Geset message
  displayMessage("Start guessing...");

  //Reset score
  document.querySelector(".score").textContent = score;

  //Hide new number
  document.querySelector(".number").textContent = "?";

  //Reset style
  document.body.style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("header").style.borderBottomColor = "#eee";
  document.querySelector(".number").style.backgroundColor = "#eee";
  document.querySelector(".guess").value = "";
};

//Implements buttons
check.addEventListener("click", function () {
  gameMechanism();
});
again.addEventListener("click", function () {
  againMechanism();
});

//Implements key functions
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") gameMechanism();
  if (e.key === "Escape") againMechanism();
});
