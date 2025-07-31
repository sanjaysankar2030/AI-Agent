import { promises as fs } from 'fs';
import { run_ai } from './ai.mjs';

let str= await run_ai();

async function write_file(){
    try{
        await fs.appendFile("touch.txt",str);
        console.log("Written to the file.... Probably !!");
    }
    catch(err){
        console.error(err);
        console.error("Fucking piece a' shit , javascript you whore");
    }
}

write_file();
