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
    expect(game.numberOfMove).toEqual(1);
  })

  it ('#.isEndGame return true when move > 9', function() {
    for (var i = 0; i <= 9; i ++) {
      game.placeSpot(i)
    }
    expect(game.isEndGame()).toEqual(true);
  })

  it ('#.switchTurn switch currentPlayer between O and X', function() {
    expect(game.currentPlayer).toEqual("O")
    game.switchTurn()
    expect(game.currentPlayer).toEqual("X");
  })

});
