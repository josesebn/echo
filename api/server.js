const http = require('http');
const url = require('url');
const port = 1110;
const host = 'localhost';

const server = http.createServer(function (req, res) {
    const parsed_URL = url.parse(req.url, true);
    if (parsed_URL.pathname == '/echo' && parsed_URL.query.message) {
        res.statusCode = 200;
        res.setHeader('Cache-control', 'no-cache');
        res.end(parsed_URL.query.message);
    } else {
        res.statusCode = 404;
        res.end("Page not found");
    }
});

server.listen(port, host, function () {
    console.log((new Date()) + 'Web server is running on port 1110');
});