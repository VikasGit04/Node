// import * as events from 'events';
const events = require('events');

// class MyEmitter extends events.EventEmitter {}

// const myEmitter = new MyEmitter();

const myEmitter = new events.EventEmitter();

myEmitter.on('event', (id,name)=> {
    // const [ id, name ] = args;
    console.log('an event occurred!');
    // console.log('Arguments:', args);
    console.log(`Id: ${id} and Name: ${name}`);
});

myEmitter.on('event', (...arg)=> {
    console.log('event occurred with ', arg);
})

myEmitter.on('error', (err)=> {
    console.log( err);
})

myEmitter.emit('event', 1,'name');

// myEmitter.emit('error', new Error('throw err'));

console.log(myEmitter.eventNames());

console.log(myEmitter.listenerCount('event'));