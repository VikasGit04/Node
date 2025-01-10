const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res)=> {
    // console.log('Req:', req.url);
    const log = `${Date()} : Request received from url: ${req.url}\n`;
    fs.appendFile('./log.txt', log, (err,data)=> {
        switch(req.url){
            case '/': res.end('Home Page')
                break;
            case '/about': res.end('About Page');
                break;
            default: res.end('404 Page not found');

        }
    })
    
});

server.listen(5001, ()=> console.log('Server listening on port '));

