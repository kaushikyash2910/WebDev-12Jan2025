const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

const { MongoClient } = require('mongodb');


// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// 2. Todos: Database name
// Database Name
const dbName = 'Todos';
let myDB = null;

// 1. Connect with mongoDB server
client.connect()
    .then(() => {
        console.log("Mongodb server is connected to nodeJS app backend now");
        myDB = client.db(dbName);
    })
    .catch(err => {
        throw new Error("DB not running");
    })



app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// 3. Tasks: Collection

app.post('/todos', (req, res) => {
    const { task } = req.body;
    let Tasks = myDB.collection('Tasks');

    Tasks.insertOne({
        task,
        status: false
    })

    res.json({
        message: "Task inserted successfully"
    })
})

app.get('/todos', (req, res) => {
    let Tasks = myDB.collection('Tasks');
    Tasks.find({}).toArray()
        .then((data) => {
            res.json({
                message: 'Tasks fetched successfully',
                "tasks": data
            })
        }).catch(err => {
            res.status(500).json({
                message: err.message
            })
        })
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});