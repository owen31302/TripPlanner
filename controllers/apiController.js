/**
 * Created by owen on 4/1/17.
 */

var pg = require('pg');
var conString = "postgres://owen:@localhost:5432/test_1";

// ref: http://kevgary.github.io/tutorials/2015/12/26/node.js-postgreSQL.html

module.exports = function (app) {

    app.get('/api/', function (req, res) {


        pg.connect(conString, function(err, client, done) {
            if(err){
                return console.error('could not connect to postgres', err);
            }
            client.query('SELECT * FROM studenttrip ORDER BY sid', function (err, result) {
                done();
                console.log( "====================SELECT ALL=======================");
                if(err) {
                    console.log(err);
                }
                //console.log(result.rows);
                res.send(result.rows);
            });
        });
    });

    app.get('/api/:id/:name', function (req, res) {
        pg.connect(conString, function(err, client, done) {
            if(err){
                return console.error('could not connect to postgres', err);
            }
            var qString = 'INSERT INTO studenttrip VALUES (' +
                req.params.id + ', \'' + req.params.name +'\', FALSE);';
            //console.log(qString);
            client.query(qString, function (err, result) {
                done();
                console.log( "====================INSERT=======================");
                if(err) {
                    console.log(err);
                }
                //console.log(result);
                res.send(result);
            });
        });
    });

    app.put('/api/:id/:val', function (req, res) {

        if(req.params.id && req.params.val){
            pg.connect(conString, function(err, client, done) {
                var qString = 'UPDATE studenttrip' +
                    ' SET trip1 = ' + (req.params.val == 0 ? 'FALSE' : 'TRUE')+
                    ' WHERE sid = ' + req.params.id + ';';
                client.query( qString , function (err, result) {
                    done();
                    console.log( "====================UPDATE=======================");
                    if(err) {
                        console.log(err);
                    }
                    //console.log(result);
                    res.send(result);
                });
            });
        }else{
            res.send('Cannot find sid.');
        }
    });

    app.post( '/api/cnt', function (req, res) {


        pg.connect(conString, function(err, client, done) {
            var qString = 'SELECT COUNT(*) ' +
                'FROM studenttrip ' +
                'WHERE trip1 = TRUE';
            //console.log(qString);
            client.query( qString , function (err, result) {
                done();
                console.log( "====================COUNT=======================");
                if(err) {
                    console.log(err);
                }
                //console.log(result);
                res.send(result);
            });
        });
    });
}

















