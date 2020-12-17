//const WebSocket1 = require('ws');
const WebSocket = require('ws');

const wss = new WebSocket('ws://localhost:6050');
let text2 = '';
let i = 2000;
// Socket Connection opened
wss.addEventListener('open', function (event) {
    while (i > 1000) {
        text2 = 'Client 1 ' + i;
        console.log('Sending Message to server:' + i, text2);
        wss.send(text2);
        // Listen for messages from server
        wss.on('message', function incoming(message) {
            console.log('Returning from Server: %s', message);
        });
        i--;
    }
    wss.close();
});