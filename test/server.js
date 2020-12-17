const WebSocket = require('ws');
const port = 6050;
const host = 'localhost';
const url = require('url');
const http = require('http');

// Set up server
const wss1 = new WebSocket.Server({port: 6050});
//Client
wss1.on('connection', function connection(ws) {
    // Wire up logic for the message event (when a client sends something)
    ws.on('message', function incoming(message) {
        console.log('received from client: %s', message);
        ws.send(message);
    });
    ws.on('close', function() {
        console.log('No client1 open or running');
        ws.close();

    });
});