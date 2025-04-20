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


const customerSchema = new mongoose.Schema({
    name: String,
    email: String
});

const customers = mongoose.model('customers', customerSchema);

const orderSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customers' // We have told, ki yeh customers table ki id se linked h
    },
    item: String
})

const orders = mongoose.model('orders', orderSchema);

app.get('/left-outer-join', async (req, res) => {
    // customers, orders
    const data = await orders.find({}).populate({
        path:'customerId',
        select: '-email'
});

    res.send(data);
})


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});