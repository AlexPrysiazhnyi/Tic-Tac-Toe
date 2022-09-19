function openPlayerConfiguration(event) {
  projectId = event.target.dataset.playerId.toString();
  backdrop.style.display = "block";
  playerConfigurationForm.style.display = "block";
}

function closePlayerConfiguration() {
  backdrop.style.display = "none";
  playerConfigurationForm.style.display = "none";
  errorParagraph.style.display = "none";
  inputElement.classList.remove("error");
  inputElement.value = "";
}

function confirmPlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const playerName = formData.get("playername").trim();

  if (!playerName) {
    inputElement.classList.add("error");
    errorParagraph.style.display = "block";
    return;
  }

  const playerNameHeaderElement = document.getElementById(projectId);
  playerNameHeaderElement.textContent = playerName;

  players[projectId - 1].name = playerName;
  closePlayerConfiguration();
  console.log(players);
  }
