const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(function (req, res, next) {
    console.log("Middleware 1 running");
    next();
});

app.use(function (req, res, next) {
    console.log("Middleware 2 running");
    next();
});

// Will work for paths:
// 1. /greet
// 2. /greet/hello
// 3. /greet/abc/d/r/e/f
// 4. /greethello(Won't work for this)
app.use('/greet', (req, res, next) => {
    console.log("Greet middleware")
    if (!req.query.name) {
        return res.send("Cannot greet since name not provided");
    }
    next();
})


app.get('/', (req, res) => {
    res.send(`hello World`);
})

app.get('/greet', (req, res) => {
    res.send(`hello how are you?`);
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});