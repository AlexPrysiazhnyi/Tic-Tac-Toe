import * as Config from "./config.js";
import {startNewGame, selectField} from "./game.js";

export const backdrop = document.getElementById("backdrop");
export const playerConfigurationForm = document.getElementById("player-configuration");
const editPlayerConfigForm = playerConfigurationForm.querySelector("form");

export const inputElement = document.getElementById("playername");
export const gameBoardOrderedList = document.getElementById("game-board");
export const listItems = gameBoardOrderedList.querySelectorAll('li'); 
// const playerWinnerSpan = endGameArticle.querySelector("#player-winner");
export const startNewGameButton = document.getElementById("start-new-game");

const editFirstPlayerButton = document.getElementById("edit-first-player");
const editSecondPlayerButton = document.getElementById("edit-second-player");
const cancelConfigFormButton = playerConfigurationForm.querySelector(
  "button:first-of-type"
);

editFirstPlayerButton.addEventListener("click", Config.openPlayerConfiguration);
editSecondPlayerButton.addEventListener("click", Config.openPlayerConfiguration);
backdrop.addEventListener("click", Config.closePlayerConfiguration);
cancelConfigFormButton.addEventListener("click", Config.closePlayerConfiguration);
editPlayerConfigForm.addEventListener("submit", Config.confirmPlayerConfig);
startNewGameButton.addEventListener("click", startNewGame);
gameBoardOrderedList.addEventListener("click", selectField);
