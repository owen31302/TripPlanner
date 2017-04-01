/**
 * Created by owen on 4/1/17.
 */

var express = require('express');
var app = express();

// connect to database
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');


var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDBConnectionString());
setupController(app);

app.listen(port);
