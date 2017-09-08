var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Player = require('./models/player');
var Game = require('./models/game');
var bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/WerewolfDB'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/routes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Werewolf board game server started on: ' + port);