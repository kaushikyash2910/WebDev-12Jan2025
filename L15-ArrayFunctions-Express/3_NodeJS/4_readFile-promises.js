const fs = require('fs/promises');

fs.readFile('anothermessage.txt')
    .then(data => {
        console.log(data.toString())
    }).catch(err => {
        console.log(err);
    })

fs.readFile('anothermessage.txt', {
    encoding: 'utf-8'
})
    .then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err);
    })


fs.readFile('person.json', {
    encoding: 'utf-8'
}).then(data => {
    data = JSON.parse(data);
    console.log(data.name);
})


console.log("Heyy!!!")