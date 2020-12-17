const http = require('http');
const options = {
    port: 80,
    path: 'localhost:1110/echo?message=Hello',
    method: 'GET',
};

const req = http.request(options, function (res) {
    res.on('data', function (data) {
        data = JSON.parse(data);
        console.log(data);
    });
});