const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 4444;
const cookie = require('cookie')
var cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const userSchema = new mongoose.Schema({
    email: String,
    password: String
})

const User = mongoose.model('User', userSchema);

app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    await User.create({ email, password });
    res.send({
        msg: 'User signup success'
    })
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({
        msg: "Invalid email id"
    })
    if (user.password !== password) return res.status(400).json({
        msg: "Invalid password"
    })

    res.setHeader(
        "Set-Cookie",
        cookie.serialize("name", String(user.email), {
            maxAge: 60 * 60 * 24 * 7,
            httpOnly: true
        }),
    );

    res.status(200).json({
        msg: "Welcome to app"
    })

});

app.get('/dashboard', async (req, res) => {
    const {name} = req.cookies;
    let user = await User.findOne({email:name});
    if(!user) return res.send('<h1>Invalid Cookie hai</h1>');

    res.send("Welcome to internal app dashboard");
})

mongoose.connect('mongodb://localhost:27017/26-apr-cookiesDB').then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:` + PORT);
    });
})

