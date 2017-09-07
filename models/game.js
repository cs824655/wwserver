'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
	gameId: { type: Number, unique: true, required: true },
	gameType: { type: String, required: true, enum: ['kill-all', 'kill-side'], default: 'kill-all' },
	totalNumberOfPlayers: { type: Number, required: true },
	numberOfPlayersRegistered: { type: Number, required: true, default: 1 },
	totalNumberOfWerewolves: { type: Number, required: true },
	numberOfWerewolvesAlive: { type: Number, required: true },
	totalNumberOfGods: { type: Number, required: true },
	numberOfGodsAlive: { type: Number, required: true },
	totalNumberOfVillagers: { type: Number, required: true },
	numberOfVillagersAlive: { type: Number, required: true },
	villagers: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }] },
	werewolves: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }] },
	seer: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
	witch: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
	hunter: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' }
});

module.exports = mongoose.model('Game', GameSchema);