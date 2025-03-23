const fs = require('fs/promises');

// fs.writeFile(fileName, data);

let person = {
    name: 'Kartik',
    subject: 'NODEJS'
}

fs.writeFile(
    'person.json',
    JSON.stringify(person)
).then(() => {
    console.log("File write is successful");
}).catch(err => {
    console.log(err)
})