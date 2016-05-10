var Game = require('./game.js');

var GameView = function (game, ctx) {
  this.ctx = ctx;
  this.game = game;
  this.whiteBloodCell = this.game.addWhiteBloodCell();
};

GameView.prototype.start = function (canvasEl) {

    this.bindKeyHandlers();
    var self = this;
    var refresh = function() {
      // self.game.moveObjects();
      // self.game.checkCollosions();
      self.game.step();
      self.game.draw(self.ctx);
    };

    setInterval(refresh,20);
};

GameView.prototype.bindKeyHandlers = function () {
  var whiteBloodCell = this.whiteBloodCell;
  key('w', function() {Math.abs(whiteBloodCell.vel[1]) < 10 ? whiteBloodCell.power([0,-1]) : ""});
  key('a', function() {Math.abs(whiteBloodCell.vel[0]) < 10 ? whiteBloodCell.power([-1,0]) : ""});
  key('s', function() {Math.abs(whiteBloodCell.vel[1]) < 10 ? whiteBloodCell.power([0,1]) : ""});
  key('d', function() {Math.abs(whiteBloodCell.vel[0]) < 10 ? whiteBloodCell.power([1,0]) : ""});

  key('space', function() {whiteBloodCell.fireBullet()});
};


module.exports = GameView;