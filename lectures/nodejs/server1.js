const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/user'){
        return res.end("Welcome to our user page");
    } else if(req.url === '/product'){
        return res.end("Welcome to our product page");
    } else if(req.url === '/'){
    res.end("server is running");
    }
})
server.listen(3200);
console.log("server is running on port 3200");