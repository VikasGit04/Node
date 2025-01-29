const EventEmitter = require('events');

const myEventEmitter = new EventEmitter();

myEventEmitter.on('data_received', (data)=> {
    console.log(`Data: ${data}`);
});
const data = [1,2,3,4];
myEventEmitter.emit('data_received', data);
console.log('finish');