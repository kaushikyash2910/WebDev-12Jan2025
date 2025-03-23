const fs = require('fs');


fs.unlink('anothermessage.txt', (err) => {
    if (err) throw err;
    console.log("Success");
})
