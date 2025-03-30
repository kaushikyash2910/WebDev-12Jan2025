const express = require('express');
const app = express();
const PORT = 4444;

app.get('/', (request, response) => {
    response.send("Hello World");
})

/*
// http://localhost:4444/salutation?name=Harsh&last=Choudhary
    req.query = {
        name : 'Harsh',
        last : 'Choudhary'
    }
*/
// Query Parameter
app.get('/salutation', (req, res) => {
    // console.log(req);
    const data = req.query; // Client ka data comes into the object inside req
    console.log(data)
    res.send(`Hey!! Good Morning ${data.name} - ${data.last}`);
})

// Params
// http://localhost:4444/salutation/Raja/Kumar
/*
req.params = {
    name : 'Raja',
    last : 'Kumar'
}
*/
app.get('/salutation/:name/:last',(req,res)=>{
    const data = req.params; // Client ka data comes into the object inside req
    console.log(data)
    res.send(`Hey!! Good Morning ${data.name} - ${data.last}`);
})



app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});