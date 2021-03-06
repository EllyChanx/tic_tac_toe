"use strict";

function Game() {
  this.board = new Array(9);
  this.numberOfMove = 0;
  this.currentPlayer = "O";
}

Game.prototype.placeSpot = function(indexNumber) {
  this.board[indexNumber] = this.currentPlayer;
};

Game.prototype.isEndGame = function() {
  if (this.checkWin())  {
    return true;
  } else {
    return this.numberOfMove >= 8 ? true : false;
  }
};

Game.prototype.switchTurn = function () {
  this.currentPlayer === "O" ? this.currentPlayer = "X" : this.currentPlayer = "O";
};

Game.prototype.checkWin = function() {
  var winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for ( var i = 0; winPattern[i]; i++ ) {
    var boardPatter = this.board[winPattern[i][0]] + this.board[winPattern[i][1]] + this.board[winPattern[i][2]];
    if (boardPatter === "OOO" || boardPatter === "XXX") { 
      return true; 
    }
  }
};

Game.prototype.updateTurn = function() {
  // if (this.isEndGame()) { throw new Error ("Game Over") }
  this.numberOfMove++ ;
  this.switchTurn();
};

module.exports = Game;
