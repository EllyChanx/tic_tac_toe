"use strict";

function Game() {
  this.board = new Array(9);
  this.numberOfMove = 0;
}

Game.prototype.placeSpot = function(indexNumber) {
  this.board[indexNumber] = "O";
  this.numberOfMove ++ ;
};

module.exports = Game;
