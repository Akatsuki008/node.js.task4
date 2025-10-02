const fs = require('fs')

//reading files

fs.readFile('./node_modules/sp4/blog1.txt', (err, data)=>
{
    if(err)
    {
        console.log(err);
    }
    console.log(data.toString());
});

console.log("last line");

//writing files
fs.writeFile('./node_modules/sp4/blog1.txt', "ami pari na kichu", () =>
{
    console.log("file is written.\n")
});

//if a file doesnt exist
fs.writeFile('./node_modules/sp4/blog2.txt', "hello sujon", ()=>
{
    console.log("done")
});


//directories
if(fs.existsSync("./assests")){
fs.mkdir("./assests", (err)=>
{
    if(err){
    console.log(err);
    }
    console.log("folder created.")
});
}
else
{
    fs.rmdir("./assests", (err)=>
    {
        if(err)
        {
            console.log(err);
        }
        console.log("folder created")
    })
}

//deleting files

if(fs.existsSync('./node_modules/sp4/blog2.txt'))
{
    fs.unlink("./node_modules/sp4/blog2.txt", (err) =>
    {
        
        console.log("file deleted.")
    });
}