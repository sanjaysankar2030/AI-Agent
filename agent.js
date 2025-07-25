const fs=require('fs').promises;

let str="Hello World";

async function write_file(){
    try{
        await fs.writeFile("touch.txt",str);
        console.log("Written to the file.... Probably !!");
    }
    catch(err){
        console.error(err);
        console.error("Fucking piece a' shit , javascript you whore");
    }
}

write_file();
