function startNewGame() {
    if (!(players[0].name && players[1].name)) {
        alert('Please set up both player names!');
        return;
    }
    gameInterfaceSection.style.display = 'block';
    activePlayerNameSpan.textContent = players[playerNumber].name;
}

function switchPlayers() {
    if (playerNumber === 0) {
        playerNumber = 1;
    } else {
        playerNumber = 0;
    }
    activePlayerNameSpan.textContent = players[playerNumber].name;
}

function selectField(event) {
    if (event.target.tagName !== 'LI') {
        return;
    }
    event.target.textContent = players[playerNumber].symbol;
    event.target.classList.add('clicked');
    switchPlayers();
}