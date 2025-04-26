const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/user', async (req, res) => {
    const { name, password } = req.body;

    try {
        let user = await User.findOne({ name });
        if (user) return res.status(201).json({
            message: 'Name already exist, try another username'
        })
        // console.log("Starting hashing")
        let hash = await bcrypt.hash(password, 15);
        // console.log("End hashing")
        await User.create({ name, password: hash });
        res.status(200).json({
            message: 'User created successfully'
        })

    } catch (error) {
        res.status(500).json({
            message: 'Not able to create user',
            error: error.message
        })
    }
})




mongoose.connect('mongodb://localhost:27017/26-apr-bcrypt')
    .then(() => {
        console.log("Mongodb connected");
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })




