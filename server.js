var http = require('http');

var server = http.createServer(function(req, res) {
	res.writeHead(200);
	res.write('<p>This is my node.js server</p>');
	res.end();
});

var port = 10001;
server.listen(port, function() {
	console.log('server listenting on port '+ port);
});
