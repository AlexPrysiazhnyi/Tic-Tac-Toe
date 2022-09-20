function startNewGame() {
  if (!(players[0].name && players[1].name)) {
    alert("Please set up both player names!");
    return;
  }
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

  const selectedRowId = clickedField.dataset.rowId - 1;
  const selectedColumnId = clickedField.dataset.columnId - 1;
  trackingfFields[selectedRowId][selectedColumnId] = playerNumber + 1;
  const winnerNumber = winnerCheck();
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
