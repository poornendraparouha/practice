const express = require('express');
// create a server
const server = express();
// define the port
const port = 3000;

function globalMiddleware(req, res, next) {
    console.log('global middleware!');
    next();
}
function firstMiddleware(req, res, next) {
    console.log('first middleware!');
    next();
}
function secondMiddleware(req, res, next) {
    console.log('second middleware!');
    next();
}
// this is a application leval middleware that will be called for every request
server.use(globalMiddleware);


// this is a route leval middleware that will be called for every send request
server.get('/send', [firstMiddleware, secondMiddleware], (req, res) => {
    res.send('Welcome to express server!');
});


server.post('/', (req, res) => {
    // this is how we ca set the status code of the response
    res.status(201).send('Post request recieved!');
});

// define the route(handle the default request)
server.get('/', (req, res) => {
    // http headers can be set using res.set() method
    res.set('Content-Type', 'text/plain');
    res.send('Get request recieved!');
});

server.put('/', (req, res) => {
    res.send('Put request recieved!');
});

server.delete('/', (req, res) => {
    res.send('Delete request recieved!');
});


// start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});