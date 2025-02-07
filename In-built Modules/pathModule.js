// Path module provides utilities for joining, resolving, parsing, formatting, normalizing and manipulating paths.

const path = require('path');

const fullPath = path.join('/root', 'myFile.txt');
console.log(fullPath);  // Output: /root/myFile.txt

const parsePath = path.parse('/root/myFile.txt');
console.log(parsePath); 
// Output: 
// {
//     root: '/',
//     dir: '/root',
//     base: 'myFile.txt',
//     ext: '.txt',
//     name: 'myFile'
//   }

const absolutePath = path.resolve('folder', 'myFile.txt');
console.log('Absolute Path:', absolutePath);    
// Output: C:\Users\U58539\OneDrive - Bühler\Vikas\Practice\Node\folder\myFile.txt

const dirName = path.dirname('/root/myFile.txt');
console.log('Directory Name:', dirName);
// Output: /root

const fileExt = path.extname('/root/myFile.txt');
console.log('File extension:', fileExt);
// Output: .txt