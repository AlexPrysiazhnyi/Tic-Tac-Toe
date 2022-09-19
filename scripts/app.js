const backdrop = document.getElementById("backdrop");
const playerConfigurationForm = document.getElementById("player-configuration");
const editPlayerConfigForm = playerConfigurationForm.querySelector("form");
const inputDiv = document.querySelector(".form-control");
const inputElement = document.getElementById("playername");
const errorParagraph = inputDiv.lastElementChild;

let projectId;
const players = [
  {
    symbol: "X",
  },
  {
    symbol: "O",
  },
];
// const playerListItems = document.querySelectorAll('li');

const editFirstPlayerButton = document.getElementById("edit-first-player");
const editSecondPlayerButton = document.getElementById("edit-second-player");
const cancelConfigFormButton = playerConfigurationForm.querySelector(
  "button:first-of-type"
);

editFirstPlayerButton.addEventListener("click", openPlayerConfiguration);
editSecondPlayerButton.addEventListener("click", openPlayerConfiguration);
backdrop.addEventListener("click", closePlayerConfiguration);
cancelConfigFormButton.addEventListener("click", closePlayerConfiguration);
editPlayerConfigForm.addEventListener("submit", confirmPlayerConfig);
