const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(function (req, res, next) {
    console.log("Middleware 1 running");
    next();``
});

app.get('/', (req, res) => {
    res.send(`hello World`);
})

app.get('/greet', function (req, res, next) {
    if (!req.query.name) {
        return res.send("Cannot greet since name not provided");
    }
    next();
}, (req, res) => {
    res.send(`hello how are you?`);
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});