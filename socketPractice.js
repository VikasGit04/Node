//Server : NodeJs
const WebSocket = require('ws');

const server = new WebSocket.Server({port: 8005});

server.on('connection', socket => {
    console.log('Client Connected!');

    socket.on('message',(data)=> {
        console.log('Data:', data);
    });

    socket.on('close', ()=> {
        console.log('Client closed.');
    });
});

console.log('hi');
// Client : Browser
// const socket = new WebSocket('ws://localhost:8005');

// socket.onopen = () => {
//     console.log('Connected to server');
//     socket.send('Hello Server');
// }

// socket.onmessage = (message) => {
//     console.log('Received from server:', message);
// }

// socket.onclose = () => {
//     console.log('Disconnected from server');
// }
