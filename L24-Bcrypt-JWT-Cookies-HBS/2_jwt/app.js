const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
var jwt = require('jsonwebtoken');

app.use(express.urlencoded({ extended: true }));
const JWT_SECRET_KEY = 'Mayank Aggarwal from Harayana likes to play PUBG';

app.get('/generate-token', (req, res) => {
    var token = jwt.sign({ name: 'Mayank', state: 'Haryana' }, JWT_SECRET_KEY);

    console.log(token);
    res.send(token);
})

app.get('/verify-token', (req, res) => {
    let token = 'Abhi dhoondh rhey hai';
    // console.log(req.headers.authorization.split(' ')[1])
    token = req.headers.authorization.split(' ')[1];
    // res.send(token);
    jwt.verify(token, JWT_SECRET_KEY, function (err, userData) {
        if (err) return res.json({
            message: 'Not a valid token'
        })


        res.json({
            message: 'Welcome again',
            userData
        })
    });

})


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});