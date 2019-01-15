describe("Player", function() {
  var Game = require('../src/Game');
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it ('return a new array of nine as the game borad', function() {
    expect(game.board).toEqual([undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]);
  })

});
