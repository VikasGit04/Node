const cluster = require('cluster');
const os = require('os');
const http = require('http');

const nCpu = os.cpus().length;
// console.log('CPU:', nCpu);

if(cluster.isMaster) {
    console.log(`Master process is running on PID: ${process.pid}`);

    for(let i=0; i<nCpu; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died!`);
    });
} else {
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.end('Hello!');
    });

    server.listen(3001, ()=> {
        console.log(`Worker ${process.pid} is listening on port 3001`);
    });
}