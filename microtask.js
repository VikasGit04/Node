console.log('Start');

setTimeout(() => {
  console.log('SetTimeout 1');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise Resolve 1');
});

setTimeout(() => {
  console.log('SetTimeout 2');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise Resolve 2');
});

console.log('End');
