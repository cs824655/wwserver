'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
	playerId: { type: String, unique: true, required: true },
	gameSerialNumber: { type: Number, required: true},
	gameId: { type: Number, required: true},
	role: { type: String, enum: ['villager', 'seer', 'witch', 'hunter', 'werewolf'], required: true },
	isCreator: { type: Boolean, required: true, default: false},
	isAlive: { type: Boolean, required: true }
});

module.exports = mongoose.model('Player', PlayerSchema);