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

// // aone way of using middleware
// server.get('/', (req, res, next) => {
//     console.log('first middleware!');
//     next();
// });

// second way of using middleware by passing an array of middleware
// server.get('/', firstMiddleware, secondMiddleware, (req, res) => {
//     res.send('Welcome to express server!');
// });

// this is a route leval middleware that will be called for every send request
server.get('/send', [firstMiddleware, secondMiddleware], (req, res) => {
    res.send('Welcome to express server!');
});

// define the route(handle the default request)
server.get('/', (req, res) => {
    res.send('Welcome to express server!');
});

// start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});