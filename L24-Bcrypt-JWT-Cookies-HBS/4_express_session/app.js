const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 4444;
const session = require('express-session')


app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'abfbahrbkesbhrhkjesvfbse,fjesbvrtjhvwej.t vj.',
    resave: false,
    saveUninitialized: true, // Cookie ki need ho ya na ho cookie banado
}))

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

    req.session.email = user.email;

    res.status(200).json({
        msg: "Welcome to app"
    })

});

app.get('/dashboard', async (req, res) => {
    const { email } = req.session;
    console.log(req.session)
    let user = await User.findOne({ email});
    if (!user) return res.send('<h1>Invalid Cookie hai</h1>');

    res.send(`Welcome to internal app dashboard ${req.session.email}`);
})

mongoose.connect('mongodb://localhost:27017/26-apr-cookiesDB').then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:` + PORT);
    });
})

