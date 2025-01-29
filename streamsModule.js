const fs = require('fs');
const { setDefaultHighWaterMark } = require('stream');
const zlib = require('zlib');

// const readableStream = fs.createReadStream('../Notes/nodejs.txt', 'utf8');
// Events: data, end, error
// Methods: read & pipe

// readableStream.on('data', (chunk)=> {
//     console.log('Chunk :');
// });

// readableStream.on('end', ()=> {
//     console.log('File read completed!');
// });

// readableStream.on('error', (error)=> {
//     console.log('Error while reading file, error:', error.message);
// });

// const writeStream = fs.createWriteStream('./output.txt');
// Events: drain & finish
// Methods: write & end

// writeStream.write('Hello ');
// writeStream.write('World!');
// writeStream.end();
// writeStream.on('finish', ()=> {
//     console.log('File write completed!');
// });

// writeStream.on('error', (err)=> {
//     console.log('Error:', err);
// });

const readStream = fs.createReadStream('output.txt','utf8');
const writeStream1 = fs.createWriteStream('input.txt');

readStream.pipe(writeStream1);

readStream.on('data', (data)=> {
    console.log('Data :', data);
});

// Flowing Mode
// readStream.on('readable', ()=> {
//     let chunk;
//     while(null !== (chunk = readStream.read(1))) {
//         console.log('Read chunk:', chunk);
//     }
// });
// Non-flowing mode
readStream.on('readable', ()=> {
    let data = readStream.read(12);
    console.log('Read whole chunk:', data);
});


readStream.on('end', ()=> {
    console.log('Finish reading from output.txt and writing it into input.txt');
});

writeStream1.on('finish', ()=> {
    
    console.log('Writing finished in input.txt');
});

// const gzipStream = zlib.createGzip();
// const compressStream = fs.createWriteStream('compressed.txt.gz')
// readableStream.pipe(gzipStream).pipe(compressStream).on('finish', ()=> {
//     console.log('Compressing completed!');
// });

// const unzipStream = zlib.createGunzip();
// const readCompressedFile = fs.createReadStream('compressed.txt.gz');
// const writeStreamUnzip = fs.createWriteStream('nodejsNotes.txt');

// readCompressedFile.pipe(unzipStream).pipe(writeStreamUnzip).on('finish', ()=> {
//     console.log('unzip completed');
// })

// unzipStream.on('error', (err)=> {
//     console.log('Error')
// });
