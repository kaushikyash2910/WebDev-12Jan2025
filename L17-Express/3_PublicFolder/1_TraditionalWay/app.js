const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.get('/', (req, res) => {
    const filePath = path.join(__dirname,'index.html');
    res.sendFile(filePath);
})

app.get('/style.css',(req,res)=>{
    const filePath = path.join(__dirname,'style.css');
    res.sendFile(filePath);
})

app.get('/script.js',(req,res)=>{
    const filePath = path.join(__dirname,'script.js');
    res.sendFile(filePath);
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});