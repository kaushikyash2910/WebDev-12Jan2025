const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/myDB')
    .then(() => {
        console.log("Mongodb server is connected");
    })

// 1. Create a Schema
const todoSchema = new mongoose.Schema({
    task: String,
    status: { type: Boolean, default: false }
});

// 2. Create a model (Collection)
const Tasks = mongoose.model('Tasks', todoSchema);

// app.post('/todos', (req, res) => {
//     const { task } = req.body;

//     let newTask = new Tasks({ task });
//     // newTask.save(); // Promise hai yeh, because it is time consuming task
//     newTask.save().then(() => {
//         res.status(200).json({
//             message: "Task inserted successfully"
//         })
//     }).catch(err => {
//         res.status(503).json({
//             message: 'Not able to store task currently',
//             err: err.message
//         })
//     })
// })

app.post('/todos', async (req, res) => {
    const { task } = req.body;

    try {
        let newTask = new Task({ task });
        await newTask.save();

        res.status(200).json({
            message: "Task inserted successfully"
        })
    } catch (err) {
        res.status(503).json({
            message: 'Not able to store task currently',
            err: err.message
        })
    }
})

// app.get('/todos', (req, res) => {

//     Tasks.find({})
//         .then((data) => {
//             res.json({
//                 message: 'Tasks fetched successfully',
//                 "tasks": data
//             })
//         }).catch(err => {
//             res.status(500).json({
//                 message: err.message
//             })
//         })
// })

app.get('/todos', async (req, res) => {

    try {
        let data = await Tasks.find({})
        res.json({
            message: 'Tasks fetched successfully',
            "tasks": data
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});