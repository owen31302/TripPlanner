/**
 * Created by owen on 4/1/17.
 */

var bodyParser = require('body-parser');
var pg = require('pg');
var conString = "postgres://owen:@localhost:5432/test_1";
//var client = new pg.Client(conString);


module.exports = function (app) {

    //app.use(bodyParser.json());
    //app.use(bodyParser.urlencoded({extended : true}));

    app.get('/api/', function (req, res) {
        

        pg.connect(conString, function(err, client, done) {
            if(err){
                return console.error('could not connect to postgres', err);
            }
            console.log("connected to database");
            client.query('SELECT * FROM studenttrip', function (err, result) {
                done();
                console.log( "====================SELECT ALL=======================");
                if(err) {
                    console.log(err);
                }
                console.log(result.rows);
                res.send(result.rows);
            });
        });
    });

    app.get('/api/:id', function (req, res) {

        if(req.params.id){
            pg.connect(conString, function(err, client, done) {
                var qString = 'SELECT * FROM studenttrip WHERE sid = 1;';
                client.query( qString , function (err, result) {
                    done();
                    console.log( "====================SELECT sid=======================");
                    if(err) {
                        console.log('QQQ' + err);
                    }
                    console.log(result);
                    res.send(result);
                });
            });
        }else{
            res.send('Cannot find sid.');
        }
    });

    app.post( '/api/todo', function (req, res) {

        if(req.body.id){

            var qString = 'SELECT * FROM studenttrip WHERE sid = ' + req.body.id;
            client.query( qString , function (err, result) {
                console.log( "====================SELECT=======================");
                if(err) {
                    console.log(err);
                }
                console.log(result.rows);
                res.send(result.rows);
                client.end();
            });

        }else{
            res.send('Cannot find sid.');
        }
    });
}
