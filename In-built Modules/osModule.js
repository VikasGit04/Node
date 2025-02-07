// It provides a set of methods for interacting with the operating system.

const os = require('os');

console.log('OS Type:', os.type()); // Windows_NT

console.log('OS USer info:', os.userInfo());
// {
//     uid: -1,
//     gid: -1,
//     username: 'U58539',
//     homedir: 'C:\\Users\\U58539',
//     shell: null
//   }

console.log('OS Total Memory:', os.totalmem());

console.log('OS Free Memory:', os.freemem());

console.log('OS CPUs:', os.cpus());