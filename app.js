/**
 * Created by owen on 4/1/17.
 */

var express = require('express');
var app = express();

// connect to database
//var mongoose = require('mongoose');
var config = require('./config');
//var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

//mongoose.Promise = global.Promise;
//mongoose.connect(config.getDBConnectionString());
//setupController(app);
apiController(app);

app.listen(port);
