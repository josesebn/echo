**Node 12.8.4 and npm 6.14.6 are used to run the app**

_To run the server and test:_
Go to the test folder and run 
`npm install` 
`npm start`
Now open a new terminal in the same folder and do, 
`npm test` 

For re-running again its adviced to do `rm -rf /node_modules package-lock.json`
`npm clean cache --force` before the npm install again and run the same above steps.

To make the API work, 
Do `npm install` and then `node server.js`. This will start the api server.(I was able to make work only singel server single client with api).

Now you use the browser to load `localhost:1110/echo?message=Hello` The server will send back to browser Hello. 
Change the `?message=<data>` part and reload the page and see the change reflected in the response.