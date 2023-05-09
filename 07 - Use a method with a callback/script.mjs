import * as fs from "node:fs";

/*Read file*/

/*fs.readFile("file.txt", {encoding: "utf-8"}, function(error, data){
    if(error){
        console.error(error);
        return;
    }
    console.log(data);
})*/

/*Write file*/

import { writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';

const data = new Uint8Array(Buffer.from('Hello, I write in the message.txt'));
writeFile('message.txt', data, (err) => {
    if(err){
        console.error(err);
        return;
    }
  console.log('The file has been saved');
}); 