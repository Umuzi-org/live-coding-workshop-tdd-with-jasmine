function Player() {
  this.totalScore = 0;
  this.frames = [];

  for (let i = 0; i < 10; i++) {
    this.frames.push(new Frame());
  }

  //   console.log(this.frames);
}

function Frame() {
  this.closed = false;
}

function Game() {
  this.status = "invalid";
  this.players = [];

  this.addPlayer = function(player) {
    this.players.push(player);
    this.status = "valid";
  };
}
