"use strict";

function Game() {
  this.board = new Array(9);
  this.numberOfMove = 0;
  this.currentPlayer = "O"
}

Game.prototype.placeSpot = function(indexNumber) {
  this.board[indexNumber] = "O";
  this.numberOfMove ++ ;
};

Game.prototype.isEndGame = function() {
  return this.numberOfMove > 9 ? true : false
};

Game.prototype.switchTurn = function () {
  this.currentPlayer === "O" ? this.currentPlayer = "X" : this.currentPlayer = "O";
}

module.exports = Game;
