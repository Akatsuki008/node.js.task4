const fs = require('fs');
const readStream = fs.createReadStream('./node_modules/sp4/blog2', {encoding: 'utf8'});
const writeStream = fs.createWriteStream("./node_modules/sp4/blog3.txt");
readStream.on('data', (chunk) =>
{
    console.log('------new chunk-----');
    console.log(chunk);
    writeStream.write("new chunk");
    writeStream.write(chunk);
});

//piping 
readStream.pipe(writeStream);