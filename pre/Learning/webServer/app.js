/**
 * Created by owen on 3/31/17.
 */

// import the http module
var http = require('http');
// import the file system module
var fs = require('fs');



// call back function in createServer
// handle the request and sends back the response
http.createServer( function (req, res) {

    //res.writeHead(200, {'Content-Type' : 'text/html'});
    // a better way to improve the performance
    //var html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
    //fs.createReadStream(__dirname + '/index.htm').pipe(res);

    // dynamic template
    /*var message = 'Hello world....';
    html = html.replace('{Message}', message);
    res.end(html);*/

    // sending JSON file
    res.writeHead(200, {'Content-Type' : 'application/json'});
    var obj = {
        firstname : 'Owen',
        lastname : 'Lin'
    };
    res.end(JSON.stringify(obj));

}).listen(4000, '127.0.0.1');
