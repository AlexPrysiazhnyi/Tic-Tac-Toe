function startNewGame() {
  if (!(players[0].name && players[1].name)) {
    alert("Please set up both player names!");
    return;
  }
  startNewGameButton.disabled = true;
  gameReset();
  gameInterfaceSection.style.display = "block";
  activePlayerNameSpan.textContent = players[playerNumber].name;
}

function switchPlayers() {
  if (playerNumber === 0) {
    playerNumber = 1;
  } else {
    playerNumber = 0;
  }
  activePlayerNameSpan.textContent = players[playerNumber].name;
  roundNumber++;
}

function selectField(event) {
  const clickedField = event.target;
  if (clickedField.tagName !== "LI") {
    return;
  }
  clickedField.textContent = players[playerNumber].symbol;
  clickedField.classList.add("clicked", "deactivated-clicks");

  const selectedRowId = clickedField.dataset.rowId - 1;
  const selectedColumnId = clickedField.dataset.columnId - 1;
  trackingfFields[selectedRowId][selectedColumnId] = playerNumber + 1;
  const winnerNumber = winnerCheck();
  if (winnerNumber !== 0) {
    gameFinal(winnerNumber);
  }
  switchPlayers();
  console.log(winnerNumber);
}

function gameFinal(winnerId) {
  endGameArticle.style.display = "block";
  console.log(endGameArticle.querySelector("#player-winner"));

  if (winnerId > 0) {
    endGameArticle.querySelector("#player-winner").textContent =
      players[winnerId - 1].name;
  } else if (winnerId == -1) {
    endGameArticle.firstElementChild.textContent = "It's a draw!";
  }

  listItems.forEach((el) => (el.classList.add("deactivated-clicks")));
  currentPlayerTurn.style.display = "none";
  startNewGameButton.disabled = false;
}

function gameReset() {
  playerNumber = 0;
  roundNumber = 1;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      trackingfFields[i][j] = 0;
    }
  }
  listItems.forEach((el) => {
    el.classList.remove("deactivated-clicks", "clicked");
    el.textContent = "";
  });
  endGameArticle.style.display = "none";
  currentPlayerTurn.style.display = "block";
  endGameArticle.firstElementChild.innerHTML =
    'You won, <span id="player-winner"></span>!';
}
