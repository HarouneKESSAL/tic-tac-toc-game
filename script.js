var gameBoard = [[null, null, null], [null, null, null], [null, null, null]];
var currentPlayer = "X";
var xScore = 0;
var oScore = 0;
var drawScore = 0;
var gameOver = false;

function placeSymbol(row, col) {
  if (gameOver || gameBoard[row][col] != null) {
    return;
  }
  gameBoard[row][col] = currentPlayer;
  document.getElementById(row + "-" + col).innerHTML = currentPlayer;
  checkForWin();
  checkForDraw();
  switchPlayer();
}

function checkForWin() {
  for (var i = 0; i < 3; i++) {
    if (gameBoard[i][0] == currentPlayer && gameBoard[i][1] == currentPlayer && gameBoard[i][2] == currentPlayer) {
      gameOver = true;
      updateScore();
      return;
    }
    if (gameBoard[0][i] == currentPlayer && gameBoard[1][i] == currentPlayer && gameBoard[2][i] == currentPlayer) {
      gameOver = true;
      updateScore();
      return;
    }
  }
  if (gameBoard[0][0] == currentPlayer && gameBoard[1][1] == currentPlayer && gameBoard[2][2] == currentPlayer) {
    gameOver = true;
    updateScore();
    return;
  }
  if (gameBoard[0][2] == currentPlayer && gameBoard[1][1] == currentPlayer && gameBoard[2][0] == currentPlayer) {
    gameOver = true;
    updateScore();
    return;
  }
}

function checkForDraw() {
  var emptySpots = 0;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (gameBoard[i][j] == null) {
        emptySpots++;
      }
    }
  }
  if (emptySpots == 0 && !gameOver) {
    gameOver = true;
    drawScore++;
    document.getElementById("draw-score").innerHTML = drawScore;
  }
}

function switchPlayer() {
  if (currentPlayer == "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function updateScore() {
  if (currentPlayer == "X") {
    xScore++;
    document.getElementById("x-score").innerHTML = xScore;
  } else {
    oScore++;
    document.getElementById("o-score").innerHTML = oScore;
  }
}

function resetGame() {
  gameBoard = [[null, null, null], [null, null, null], [null, null, null]];
  currentPlayer = "X";
  gameOver = false;
  for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
  document.getElementById(i + "-" + j).innerHTML = "";
  }
  }
  }
  
  function resetScoreboard() {
  xScore = 0;
  oScore = 0;
  drawScore = 0;
  document.getElementById("x-score").innerHTML = xScore;
  document.getElementById("o-score").innerHTML = oScore;
  document.getElementById("draw-score").innerHTML = drawScore;
  }