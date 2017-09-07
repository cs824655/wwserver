'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
	deviceId: { type: String, unique: true, required: true },
	gameId: { type: Number, required: true},
	role: { type: String, enum: ['villager', 'seer', 'witch', 'hunter', 'werewolf'], required: true },
	isAlive: { type: Boolean, required: true }
});

module.exports = mongoose.model('Player', PlayerSchema);