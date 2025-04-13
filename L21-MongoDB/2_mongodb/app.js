const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'test';
client.connect()
    .then(() => {
        db = client.db(dbName);
        console.log("Mongodb server connected");

        const users = db.collection('users'); // Collection hua toh select krega

        users.insertOne({
            name: 'Priya',
            age: 18
        }).then(() => {
            console.log("Data Insertion success");
        })

        // nhi toh create karega
        users.find({}).toArray().then(data => {
            console.log(data);
        })

    }).catch(err => {
        console.log(err)
    })

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});