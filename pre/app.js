/**
 * Created by owen on 3/29/17.
 */

//How to start PostgreSQL server on Mac OS X?
//http://stackoverflow.com/questions/7975556/how-to-start-postgresql-server-on-mac-os-x

// Express Hello world
// http://expressjs.com/zh-tw/starter/hello-world.html

// execute the index.js to start the server

// Import required modules − We use the require directive to load Node.js modules.
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

//app.use(express.static('public'));
var path = require('path');
var http = require('http');


var pg = require('pg');
var conString = "postgres://owen:@localhost:5432/test_1";
var client = new pg.Client(conString);
var data = require('./routers/databaseconnection');

var mongoose = require('mongoose');
mongoose.connect(
    'mongodb://owen31302:jefun1012@ds149030.mlab.com:49030/addressbook'
);

var Schema = mongoose.Schema;

var personSchema = new Schema(
    {
        firstname : String,
        lastname : String,
        address : String
    }
);

var Person = mongoose.model('Person', personSchema);

var john = Person(
    {
        firstname : 'John',
        lastname : 'Lin',
        address : '100 xxx drive CA USA'
    }
);

john.save(
    function (err) {
        if(err){
            throw err;
        }
        console.log('person saved');
    }
);



// static express path
app.use(express.static(path.join(__dirname, 'public')));


// callback function
app.get('/', function (req, res) {
    res.sendFile('./public/index.html');
});

app.get('/getTest', function (req, res) {
    //res.send("success");
    client.connect(function(err) {
        if(err){
            return console.error('could not connect to postgres', err);
        }

        client.query('SELECT * FROM owen', function (err, result) {
            console.log( "====================SELECT=======================");
            if(err) {
                console.log(err);
            }
            console.log(result.rows[0].name);
            console.log(result.rows[1].name);
            client.end(result.rows[0].name);
            res.end();
        });
    });
});

http.createServer(app).listen(port, function () {
    console.log('Example app listening on port 3000!');
});

