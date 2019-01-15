"use strict";

function Game() {
  this.board = new Array(9);
}

Game.prototype.placeSpot = function(indexNumber) {
  this.board[indexNumber] = "O"
  return this.board
};

module.exports = Game;
