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


// callback function
app.get('/', function (req, res) {
    res.sendfile('./index.html');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

// https://github.com/brianc/node-postgres
// http://www.cnblogs.com/always-online/p/3529727.html
// node-postgres
var pg = require('pg');
var conString = "postgres://owen:@localhost:5432/test_1";
var client = new pg.Client(conString);

client.connect(function(err) {
    if(err){
        return console.error('could not connect to postgres', err);
    }

    client.query('SELECT * FROM owen', function (err, result) {
        console.log( "====================SELECT=======================");
        if(err) {
            console.log(err);
        }
        /*
        https://github.com/brianc/node-postgres/wiki/FAQ
        Result {
            command: 'SELECT',
                rowCount: 2,
                oid: NaN,
                rows: [ anonymous { name: 'c' }, anonymous { name: 'cccc' } ],
                fields:
            [ Field {
                name: 'name',
                tableID: 16396,
                columnID: 1,
                dataTypeID: 1043,
                dataTypeSize: -1,
                dataTypeModifier: -1,
                format: 'text' } ],
                _parsers: [ [Function: noParse] ],
            RowCtor: [Function: anonymous],
            rowAsArray: false,
                _getTypeParser: [Function: bound ] }
        */
        console.log(result.rows[0].name);
        console.log(result.rows[1].name);
        client.end();
    });

});

