/* global Game:true */
/* global game:true */

$(document).ready(function() {
  game = new Game();

  for (let i = 0; i < 9; i++ ) {
    $("#spot" + i).click(function () {
      markSpot(i);
      disableButton(i);
      checkEndGame();
    });
  }

  function markSpot(i) {
    game.placeSpot(i);
    $("#mark" + i).text(game.currentPlayer);
  }

  function disableButton(i) {
    $("#spot" + i).prop("disabled", true);
  }

  function checkEndGame() {
    if (game.isEndGame()) {
      endStatement();
      $(".board").prop("disabled", true);
    } else {
      game.updateTurn();
    }
  }

  function endStatement() {
    if (game.checkWin()) {
      $("#endStatus").show().text("Game Over! Winner: " + game.currentPlayer);
    } else {
      $("#endStatus").text("Game Over! Is Draw!");
    }
  }

  $("#reStart").click(function() {
    game = new Game();
    $(".board").prop("disabled", false); 
    $(".mark").empty();
    $("#endStatus").hide();
  });

});