import { isUtf8 } from 'buffer';
import { error } from 'console';
import fs from 'fs';



//readfile - callback
fs.readFile('./text.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data)
})

//readfilesynch() - Sychronous version
const data = fs.readFileSync('./text.txt', 'utf8');
console.log(data)