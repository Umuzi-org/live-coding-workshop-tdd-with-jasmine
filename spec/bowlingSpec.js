describe("Player", function() {
  it("should initially have a total score of zero", function() {
    const player = new Player();
    expect(player.totalScore).toBe(0);
  });

  it("should start off with zero populated frames", function() {
    const player = new Player();
    player.frames.forEach(x => {
      expect(x.closed).toBe(false);
    });
  });

  it("should start off with ten frames", function() {
    const player = new Player();
    expect(player.frames.length).toBe(10);
  });
});

describe("Game", function() {
  it("should should be invalid if there are no players", function() {
    const game = new Game();
    expect(game.status).toBe("invalid");
  });

  it("should have no players", function() {
    const game = new Game();
    expect(game.players.length).toBe(0);
  });

  // it("should be valid if there is at least one Player", function(){
  //     const game = new Game()
  //     game.addPlayer()
  // })
});

describe("Game.addPlayer", function() {
  it("should add players to the Game's player array", function() {
    const game = new Game();

    const player1 = new Player();
    game.addPlayer(player1);
    expect(game.players).toEqual([player1]);

    const player2 = new Player();
    game.addPlayer(player2);
    expect(game.players).toEqual([player1, player2]);

    const player3 = new Player();
    game.addPlayer(player3);
    expect(game.players).toEqual([player1, player2, player3]);
  });

  it("should be valid if there is at least one player", function() {
    const game = new Game();

    const player1 = new Player();
    game.addPlayer(player1);
    expect(game.status).toBe("valid");
  });
});
