const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
// const router = express.Router();

const app = express();

function logRequest(req,res,next) {
    console.log(`Method:${req.method}, URL: ${req.url}`);
    // res.send({message: 'Handled in middleware'});
}

app.use(bodyParser.json());
app.use(logRequest);
// app.use('/', router);

const server = http.createServer(app);

const port = 3006;

server.listen(port, ()=> {
    console.log(`Listening to server ${port}`)
});

app.get('/', (req,res)=> {
    res.status(200).json({message: 'Welcome to Server'});
    
});