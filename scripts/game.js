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
  clickedField.classList.add("clicked");
  clickedField.classList.add("deactivated-clicks");

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

function winnerCheck() {
  // Checking rows for a winner
  for (let i = 0; i < 3; i++) {
    if (
      trackingfFields[i][0] > 0 &&
      trackingfFields[i][0] === trackingfFields[i][1] &&
      trackingfFields[i][1] === trackingfFields[i][2]
    ) {
      return trackingfFields[i][0];
    }
  }

  // Checking columns for a winner
  for (let j = 0; j < 3; j++) {
    if (
      trackingfFields[0][j] > 0 &&
      trackingfFields[0][j] === trackingfFields[1][j] &&
      trackingfFields[1][j] === trackingfFields[2][j]
    ) {
      return trackingfFields[0][j];
    }
  }

  // Checking the diagonal from left top to the right bottom
  if (
    trackingfFields[0][0] > 0 &&
    trackingfFields[0][0] === trackingfFields[1][1] &&
    trackingfFields[1][1] === trackingfFields[2][2]
  ) {
    return trackingfFields[0][0];
  }

  // Checking the diagonal from top right to left bottom
  if (
    trackingfFields[0][2] > 0 &&
    trackingfFields[0][2] === trackingfFields[1][1] &&
    trackingfFields[1][1] === trackingfFields[2][0]
  ) {
    return trackingfFields[0][2];
  }

  if (roundNumber === 9) {
    return -1;
  }
  return 0;
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
    el.classList.remove("deactivated-clicks");
    el.classList.remove("clicked");
    el.textContent = "";
  });
  endGameArticle.style.display = "none";
  currentPlayerTurn.style.display = "block";
  endGameArticle.firstElementChild.innerHTML =
    'You won, <span id="player-winner"></span>!';
}
