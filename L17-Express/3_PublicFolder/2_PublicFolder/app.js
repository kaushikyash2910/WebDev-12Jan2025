const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

// We call app.use() a middleware
// By default '/' path ke liye response yeh hi bhejega
// And public folder ke andar index.html ka hona is important
// browser issi file ko load krega initially
app.use(express.static(path.join(__dirname, 'public')));

// This will not work now since the '/' path will be handled by 
// app.use(express.static());
app.get('/',(req,res)=>{
    res.send("Baad wala get");
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});