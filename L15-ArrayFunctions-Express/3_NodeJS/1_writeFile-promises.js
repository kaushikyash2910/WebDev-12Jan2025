const fs = require('fs/promises');

// fs.writeFile(fileName, data);
fs.writeFile(
    'message.txt',
    "Hello World", {
    flag: 'w'
}
).then(() => {
    console.log("File write is successful");
}).catch(err => {
    console.log(err)
})