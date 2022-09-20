const backdrop = document.getElementById("backdrop");
const playerConfigurationForm = document.getElementById("player-configuration");
const editPlayerConfigForm = playerConfigurationForm.querySelector("form");
const inputDiv = document.querySelector(".form-control");
const inputElement = document.getElementById("playername");
const errorParagraph = inputDiv.lastElementChild;
const gameInterfaceSection = document.getElementById("game-interface");
const gameBoardOrderedList = document.getElementById("game-board");
const listItems = gameBoardOrderedList.querySelectorAll('li');
const activePlayerNameSpan = document.getElementById("active-player");
const currentPlayerTurn = activePlayerNameSpan.parentElement;
const endGameArticle = document.getElementById("end-of-the-game");
// const playerWinnerSpan = endGameArticle.querySelector("#player-winner");

let playerNumber = 0;
let projectId;
let roundNumber = 1;

const players = [
  {
    symbol: "X",
  },
  {
    symbol: "O",
  },
];

const trackingfFields = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const editFirstPlayerButton = document.getElementById("edit-first-player");
const editSecondPlayerButton = document.getElementById("edit-second-player");
const cancelConfigFormButton = playerConfigurationForm.querySelector(
  "button:first-of-type"
);
const startNewGameButton = document.getElementById("start-new-game");

editFirstPlayerButton.addEventListener("click", openPlayerConfiguration);
editSecondPlayerButton.addEventListener("click", openPlayerConfiguration);
backdrop.addEventListener("click", closePlayerConfiguration);
cancelConfigFormButton.addEventListener("click", closePlayerConfiguration);
editPlayerConfigForm.addEventListener("submit", confirmPlayerConfig);
startNewGameButton.addEventListener("click", startNewGame);
gameBoardOrderedList.addEventListener("click", selectField);
