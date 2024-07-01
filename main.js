"use strict";

function selectElement(elementToSelect) {
  return document.querySelector(elementToSelect);
}

function modifyTextContent(elementToSelect, content) {
  const selectedElement = document.querySelector(elementToSelect);
  return (selectedElement.textContent = content);
}

let randomNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const guessMessage = "Start Guessing...";
const successMessage = "That's Correct!";
const tooLowMessage = "Too Low!";
const tooMuchMessage = "Too Much!";
const noNumberMessage = "No Number!";
const youLostMessage = "You Lost :(";

const checkButton = selectElement("#checkButton");
const inputElement = selectElement("#input");
const againButton = selectElement("#againButton");

checkButton.addEventListener("click", function () {
  const guess = Number(inputElement.value);
  console.log(guess, typeof guess);
  if (!guess) {
    modifyTextContent("#message", noNumberMessage);
  } else if (guess === randomNumber) {
    modifyTextContent("#number", randomNumber);
    modifyTextContent("#message", successMessage);
    selectElement("body").style.backgroundColor = "#99ff66";

    if (score > highscore) {
      highscore = score;
      modifyTextContent("#highscore", `Highscore = ${score}`);
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      modifyTextContent(
        "#message",
        guess > randomNumber ? tooMuchMessage : tooLowMessage
      );
      score--;
      modifyTextContent("#score", `Score = ${score}`);
    } else {
      modifyTextContent("#message", youLostMessage);
      modifyTextContent("#score", `Score = 0`);
    }
  }
});

againButton.addEventListener("click", function () {
  score = 20;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  selectElement("body").style.backgroundColor = "#e793bb";
  selectElement("#input").value = "";
  modifyTextContent("#message", guessMessage);
  modifyTextContent("#number", "?");
  modifyTextContent("#score", `Score = ${score}`);
});
