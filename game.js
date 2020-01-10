//SOURCES

const players = ["Robot", "Human"];
const sticks = [
  "stick1",
  "stick2",
  "stick3",
  "stick4",
  "stick5",
  "stick6",
  "stick7",
  "stick8",
  "stick9",
  "stick10",
  "stick11",
  "stick12",
  "stick13",
  "stick14",
  "stick15",
  "stick16",
  "stick17",
  "stick18",
  "stick19",
  "stick20",
  "stick21"
];

const buttons = document.getElementsByClassName("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event) {
    humanPlaying(i + 1);
  });
}

const play = function(numberAction) {
  console.log(`${sticks.length} batons`);
  sticks.splice(0, numberAction);
  console.log(`- ${numberAction} = ${sticks.length} batons`);
};

// JEU

const startGame = function() {
  let playerStart = whoStart();
  console.log("Bienvenue dans ce jeu des Allumettes.\nC'est partie !");
  nextTurn(playerStart);
};

const whoStart = function() {
  const indexRandom = Math.floor(Math.random() * 2);
  let playerStart = players[indexRandom];
  return playerStart;
};

const nextTurn = function(currentPlayer) {
  if (sticks.length === 0) {
    return endGame(currentPlayer);
  }
  console.log(`C'est au tour de ${currentPlayer}`);
  if (currentPlayer === players[0]) {
    robotPlaying();
  }
};

const robotPlaying = function() {
  const indexRandom = Math.floor(Math.random() * 3) + 1;
  play(indexRandom);
  nextTurn(players[1]);
};

const humanPlaying = function(numberSticks) {
  play(numberSticks);
  nextTurn(players[0]);
};

const endGame = function(currentPlayer) {
  if (sticks.length === 0) {
    console.log(`${currentPlayer} loose`);
  }
};

startGame();
