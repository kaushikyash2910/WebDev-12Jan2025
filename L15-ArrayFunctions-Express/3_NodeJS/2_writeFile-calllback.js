const fs = require('fs');

fs.writeFile('anothermessage.txt', "Hello World!!!!!", (err) => {
    if (err) throw err; //

    console.log("File write success");
})