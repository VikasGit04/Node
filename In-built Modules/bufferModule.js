// Creating buffer with specific size
const buffer = Buffer.alloc(10);
buffer.write('Hello World this from buffer');
console.log('Buffer:', buffer);
console.log('Buffer String:', buffer.toString());

// Creating buffer from an array
const arrayBuffer = Buffer.from([1,2,3,4,5]);
console.log('Array Buffer:', arrayBuffer.toString());
console.log('Array Buffer Size:', Buffer.byteLength(arrayBuffer));
console.log('Array Buffer Include:', arrayBuffer.includes(5));

// Creating buffer from a string
const stringBuffer = Buffer.from('hello World!', 'binary');
console.log('String Buffer:', stringBuffer);
console.log('String Buffer to String:', stringBuffer.toString());

// encoding supported by Buffer: utf8, ascii, hex, binary, utf16le, base64

const emptyBuffer = Buffer.alloc(5)
console.log('Empty Buffer', emptyBuffer);

const emptyBufferUnsafe = Buffer.allocUnsafe(5);
console.log('Unsafe buffer:', emptyBufferUnsafe);

