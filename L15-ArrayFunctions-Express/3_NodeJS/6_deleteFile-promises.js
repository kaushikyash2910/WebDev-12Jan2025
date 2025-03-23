const fs = require('fs/promises');


fs.unlink('anothermessage.txt')
    .then(() => {
        console.log("Success");
    }).catch(err => {
        console.log(err)
    })