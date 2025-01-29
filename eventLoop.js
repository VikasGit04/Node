const fs = require('node:fs');

// function someAsyncOperation(callback) {
//   // Assume this takes 95ms to complete
//   fs.readFile('/path/to/file', callback);
// }

// const timeoutScheduled = Date.now();

// setTimeout(() => {
//   const delay = Date.now() - timeoutScheduled;

//   console.log(`${delay}ms have passed since I was scheduled`);
// }, 100);

// // do someAsyncOperation which takes 95 ms to complete
// someAsyncOperation(() => {
//   const startCallback = Date.now();

//   // do something that will take 10ms...
//   while (Date.now() - startCallback < 10) {
//     // do nothing
//   }
// });

setTimeout(console.log, 0, 'setTimeout 0');
setTimeout(()=> {
  console.log('console log');

  Promise.resolve("Promise resolve").then(console.log);
  Promise.reject("Promise reject").catch(console.log);
  queueMicrotask(()=> console.log('Microtask queue'));

  process.nextTick(console.log, "next tick 1");

}, 0);
process.nextTick(console.log, "next tick 2");
Promise.resolve("Promise resolve 0").then(console.log);
setTimeout(console.log, 0, 'setTimeout 2');
process.nextTick(console.log, "next tick 3");
setTimeout(console.log, 0, 'setTimeout 3');


fs.readFile('input.txt', 'utf-8', (data)=> {
  console.log('File Read');
});

setInterval(()=> {
  console.log('Set Interval');
}, 1000);

setImmediate(()=> {
  console.log('Set Immediate');
})

fs.writeFile('output.txt', 'WriteFile', ()=> {
  console.log('Write File');
})
