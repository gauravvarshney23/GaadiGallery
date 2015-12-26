var http = require("http");
var util = require('util');

http.createServer(function (request, response) {

	console.log('Request received: ');
    util.log(util.inspect(request)) // this line helps you inspect the request so you can see whether the data is in the url (GET) or the req body (POST)
    util.log('Request recieved: \nmethod: ' + request.method + '\nurl: ' + request.url) // this line logs just the method and url
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': 'null'});
   request.on('data', function (chunk) {
        console.log('GOT DATA!');
		//console.log(request.body);
    });
   // Send the response body as "Hello World"
   response.end('Hello World');
}).listen(8081, '192.168.0.104');

// Console will print the message
console.log('Server running at http://192.168.0.104:8081/');