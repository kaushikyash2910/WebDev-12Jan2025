const express = require('express');
const path = require('path');  // NodeJs ke saath aata
const app = express();
const PORT = 4444;

app.get('/',(req,res)=>{
    // console.log(__dirname);
    // res.sendFile('/Users/kartikmathur/Desktop/C++/WebDev-12-Jan25/L17-Express/2_SendingFiles/index.html');
    const filePath = path.join(__dirname,'index.html');
    // console.log(filePath)
    res.sendFile(filePath);
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});