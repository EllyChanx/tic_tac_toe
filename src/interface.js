$(document).ready(function() {
  game = new Game();

  for (let i = 0; i < 9; i++ ) {
    $("#spot" + i).click(function () {
      markSpot(i);
      disableButton(i);
      checkEndGame();
    })
  }

  function markSpot(i) {
    game.placeSpot(i);
    $("#mark" + i).text(game.currentPlayer)
  }

  function disableButton(i) {
    $("#spot" + i).prop("disabled", true);
  }

  function checkEndGame() {
    if (game.isEndGame()) {
      $("#gameOver").text("Game Over!");
      $(".board").prop("disabled", true);
    } else {
      game.updateTurn();
    }
  }

})