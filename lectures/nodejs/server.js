const { readFileSync } = require('fs');
const http = require('http');

const server = http.createServer((req, res)=>{
    console.log("request received", req.url);
    if (req.url === '/user'){
       return res.end("Welcome to our user page")
    }else if (req.url === '/product'){
        return res.end("Welcome to our product page")
    }
    res.end("created a http server using nodejs");

})
server.listen(3000, "localhost", ()=>{
    console.log("server is running on port 3000"

        
    );
});
