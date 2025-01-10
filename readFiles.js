import * as fs from 'node:fs';
import * as fsPromises from 'fs/promises';

const filePath = '../../buhler-icon-badges-V7-3-0.svg';
const iconIdPath = '../buhler-icon-ids.txt';
const utfEncoding = 'utf8';
let iconIds;
let data = 'testing';
fs.readFile(filePath, utfEncoding, (err,data)=> {
    if(err) {
        console.log('Error:', err);
    }

    const regex = /id\s*=\s*"icon--.*"   /g;
    let result = data.match(regex);   
    iconIds = result.toString();
    
    fs.writeFile(iconIdPath, iconIds, err => {
        if(err) {
            console.log(err);
        } else {
            console.log('File write completed.');
        }
    });
});

