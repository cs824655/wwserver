'use strict';

var mongoose = require('mongoose');
var Player = mongoose.model('Player');

exports.createNewPlayer = function(req, res) {
  var newPlayer = new Player({
    playerId: req.body.playerId,
    gameSerialNumber: req.body.gameSerialNumber,
    gameId: req.body.gameId,
    role: req.body.role,
    isCreator: req.body.isCreator,
    isAlive: true
  });

  newPlayer.save(function(err, player) {
    if (err)
      res.send(err);
    res.json(player);
  });
};

exports.getPlayerById = function(req, res) {
  Player.findOne({ playerId: req.params.playerId })
  .then(function(player) {
    res.json(player);
  })
  .catch(function(err) {
    res.send(err);
  });
};

exports.updatePlayerById = function(req, res) {
  Player.findOneAndUpdate(
    { playerId: req.params.playerId },
    { $set : { isAlive: req.body.isAlive } })
  .then(function(player) {
    res.json("The status of player #"+player.gameSerialNumber+" in game #"+player.gameId+" is successfully updated.");
  })
  .catch(function(err) {
    res.send(err);
  });
};

exports.deletePlayerById = function(req, res) {

};