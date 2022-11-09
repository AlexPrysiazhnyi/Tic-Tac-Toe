import * as Variables from "./app.js";
import {players} from "./game.js";

const inputDiv = document.querySelector(".form-control");
const errorParagraph = inputDiv.lastElementChild;

let projectId;

export const openPlayerConfiguration = (event) => {
  projectId = event.target.dataset.playerId.toString();
  Variables.backdrop.style.display = "block";
  Variables.playerConfigurationForm.style.display = "block";
}

export const closePlayerConfiguration = () => {
  Variables.backdrop.style.display = "none";
  Variables.playerConfigurationForm.style.display = "none";
  errorParagraph.style.display = "none";
  Variables.inputElement.classList.remove("error");
  Variables.inputElement.value = "";
}

export const confirmPlayerConfig = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const playerName = formData.get("playername").trim();

  if (!playerName) {
    Variables.inputElement.classList.add("error");
    errorParagraph.style.display = "block";
    return;
  }

  const playerNameHeaderElement = document.getElementById(projectId);
  playerNameHeaderElement.textContent = playerName;

  players[projectId - 1].name = playerName;
  closePlayerConfiguration();
}
