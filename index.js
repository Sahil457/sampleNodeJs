const http = require('http');
const fs = require('fs');
const PORT = process.env.PORT;
const hostname = "localhost";
const home = fs.readFileSync('./index.html');
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        return res.end(home);
    } else if (req.url === '/about') {
        return res.end('<h1>ABOUT PAGE</h1>');
    } else if (req.url === '/contact') {
        return res.end('<h1>CONTACT PAGE</h1>');
    }  else if (req.url === '/service') {
        return res.end('<h1>SERVICE PAGE</h1>');
    } else {
        return res.end("<h1>Unknown endpoint</h1>");
    }
});git 

server.listen(PORT, hostname, () => {
    console.log(`Server is working on http://${hostname}:${PORT}`);
}
);