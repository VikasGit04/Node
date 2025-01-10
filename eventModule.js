import * as events from 'events';

// class MyEmitter extends events.EventEmitter {}

// const myEmitter = new MyEmitter();

const myEmitter = new events.EventEmitter();

myEmitter.on('event', ()=> {
    console.log('an event occurred!');
});

myEmitter.on('event', (arg)=> {
    console.log('event occurred with ', arg);
})

myEmitter.on('error', (err)=> {
    console.log( err);
})

myEmitter.emit('event', 1);

myEmitter.emit('error', new Error('throw err'));

console.log(myEmitter.eventNames());

console.log(myEmitter.listenerCount('event'));