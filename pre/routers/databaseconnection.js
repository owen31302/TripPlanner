/**
 * Created by owen on 3/30/17.
 */

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