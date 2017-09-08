'use strict';
module.exports = function(app) {
  var game = require('../controllers/gameController');
  var player = require('../controllers/playerController');


  // game related routes
  app.route('/game')
    .post(game.createNewGame);

  app.route('/game/:gameId')
    .get(game.getGameById)
    .put(game.updateGameById)
    .delete(game.deleteGameById);


  // player related routes
  app.route('/player')
    .post(player.createNewPlayer);

  app.route('/player/:playerId')
    .get(player.getPlayerById)
    .put(player.updatePlayerById)
    .delete(player.deletePlayerById);
};