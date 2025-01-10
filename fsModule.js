import * as fs from 'node:fs';
import * as fsPromises from 'fs/promises';

const filePath = '../nodejs.txt';
const utfEncoding = 'utf8';

// fs.readFile(filePath, utfEncoding, (err,data)=> {
//     if(err) {
//         console.log('Error:', err);
//     }
//     console.log('Data:', data);
// });

// try {
//     const data = fs.readFileSync(filePath, utfEncoding);
//     console.log('Data:', data);
// } catch (err) {
//     console.log('Error:', err);
// }

// fs.open(filePath, 'r', (err, fd) => {
//     if (err) {
//         console.log('Error:', err);
//     }
//     console.log('File Descriptor:', fd);
// });

// fs.stat(filePath, (err, stats)=> {
//     if (err) {
//         console.log('Error:', err);
//     }
//     console.log('File Stats:', stats);
//     if (stats.isFile()) {
//         console.log('it is a File');
//     }
//     if (stats.isDirectory()) {
//         console.log('it is a Directory');
//     }
//     if (stats.isSymbolicLink()) {
//         console.log('it is a Symbolic link');
//     }
// });

// async function myFunction() {
//     try {
//         const data = await fsPromises.readFile(filePath, utfEncoding);  
//         console.log('Data:', data);  
//     } catch (error) {
//         console.log('Error:', err);
//     }

// }

// myFunction();

// fs.writeFile(filePath, '\nTesting of writing file.', { flag : 'a'}, err => {
//     if (err) {
//         console.log('Error:', err);
//     } else {
//         console.log('File is written successfully');
//     } 
// });

fs.unlink('../Node/toDelete.txt', (err)=> {
    if ( err) {
        console.log('Error:', err);
    } else {
        console.log('File Deleted successfully');
    }
})