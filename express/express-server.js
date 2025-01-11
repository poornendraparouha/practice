const express = require('express');
// create a server
const server = express();
// define the port
const port = 3000;

// define the route(handle the default request)
server.get('/', (req, res) => {
    res.send('Welcome to express server!');
});

// start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});