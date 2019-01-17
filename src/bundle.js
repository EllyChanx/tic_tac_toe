(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
/* global Game:true */
/* global game:true */

const Game = require('./Game.js');

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
},{"./Game.js":1}]},{},[2]);
