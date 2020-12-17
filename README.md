**Node 12.8.4 and npm 6.14.6 are used to run the app**

_To run the server and test:_
Go to the test folder and run 
`npm install`
`npm start`
Now open a new terminal in the same folder
`npm test`

Incase of any issues please run,
`rm -rf /node_modules package-lock.json`
`npm clean cache --force` before the npm install again and run the same above steps.

To make the API work, 
Do `npm install` and then `node server.js`. This will start the api server. ( I was able to owkr only singel server single client with api).
Now you use the query `localhost:1110/echo?message=Hello` The server will send back to browser.