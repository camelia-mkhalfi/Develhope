import { writeFile } from 'fs';

writeFile('message.txt', 'Hello, I write in the message.txt', 'utf8', (error) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log('The file has been written');
});