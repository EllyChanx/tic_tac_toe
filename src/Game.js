"use strict";

function Game() {
  this.board = new Array(9);
  this.numberOfMove = 0;
}

Game.prototype.placeSpot = function(indexNumber) {
  this.board[indexNumber] = "O";
  this.numberOfMove ++ ;
};

Game.prototype.isEndGame = function() {
  return this.numberOfMove > 9 ? true : false
};

module.exports = Game;
