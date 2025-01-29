const io = require('socket.io');

const server = io(3000);

io.on('connection', (socket) => {
    console.log('Client Connected');

    socket.on('message', (message)=> {
        console.log('Message Received:', message);
    });

    socket.on('disconnect', ()=> {
        console.log('Client disconnected');
    })
})


{/* <script src="/socket.io/socket.io.js"></script>
<script>
  const socket = io('http://localhost:3000');

  socket.on('connect', () => {
    console.log('Connected to server');
    socket.send('Hello Server!');
  });

  socket.on('message', data => {
    console.log(`Received from server: ${data}`);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from server');
  });
</script> */}