const express = require('express');
const app = express();
const PORT = 4444;

// '/' par GET request ke aane par iska callback function chal jaega
app.get('/',(req,res)=>{
    // console.log(req);
    
    res.send("hello world");
})


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})