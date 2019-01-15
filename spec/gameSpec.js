describe("Player", function() {
  var Game = require('../src/Game');
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it ('#.board return a new array of nine as the game borad', function() {
    expect(game.board).toEqual([undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]);
  })

  it ('#.placeSpot change the borad element by index number', function() {
    game.placeSpot(3)
    expect(game.board).toEqual([undefined, undefined, undefined, "O", undefined, undefined, undefined, undefined, undefined]);
  })

  it ('#.numberOfMove start with 0 and += 1 after .placeSpot', function() {
    expect(game.numberOfMove).toEqual(0);
    game.placeSpot(3)
    game.updateTurn()
    expect(game.numberOfMove).toEqual(1);
  })

  it ('#.isEndGame return true when move > 9', function() {
    game.numberOfMove = 10
    expect(game.isEndGame()).toEqual(true);
  })

  it ('#.isEndGame return true when .checkWin has winner', function() {
    game.placeSpot(2);
    game.placeSpot(5);
    game.placeSpot(8);
    expect(game.isEndGame()).toEqual(true);
  })

  it ('#.isEndGame return false when .checkWin has NO winner', function() {
    game.placeSpot(2);
    expect(game.isEndGame()).toEqual(false);
    game.placeSpot(8);
    game.placeSpot(6);
    expect(game.isEndGame()).toEqual(false);
  })

  it ('#.switchTurn switch currentPlayer between O and X', function() {
    expect(game.currentPlayer).toEqual("O")
    game.switchTurn()
    expect(game.currentPlayer).toEqual("X");
    game.switchTurn()
    expect(game.currentPlayer).toEqual("O")
  })

  it ('#.checkWin return true when winPattern is reached', function() {
    game.placeSpot(0);
    game.placeSpot(1);
    game.placeSpot(2);
    expect(game.checkWin()).toEqual(true);
  })

  it ('#.checkWin return true when winPattern is reached', function() {
    game.placeSpot(0);
    game.placeSpot(4);
    game.placeSpot(8);
    expect(game.checkWin()).toEqual(true);
  })

  // it ('#.updateTurn return Game Over game end', function() {
  //   game.numberOfMove = 10;
  //   expect(function () { game.updateTurn() }).toThrowError('Game Over')
  // })

});
