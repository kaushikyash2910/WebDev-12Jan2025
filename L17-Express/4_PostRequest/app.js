const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.urlencoded()); // Middleware

// app.use(express.static(path.joi`n(__dirname,'public')));
// app.route('/')
//     .get((req, res) => {
//         console.log(req.query)
//         res.send("Hello world");
//     })
//     .post((req, res) => {
//         console.log(req.body);
//         res.send("POST REQ Receieved");
//     })

app.get('/', (req, res) => {
    console.log(req.query)
    res.send("Hello world");
})

app.post('/',(req,res)=>{
    console.log(req.body);
    res.send("POST REQ Receieved");
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});