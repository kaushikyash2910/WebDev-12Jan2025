const path = require('path');
const { v4: uuid } = require('uuid');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());

let todos = [
    /*
        {
            id: 1,
            task: 'Cricket,
            status: false
        }
    */
]

app.get('/todos', (req, res) => {
    res.send(todos);
})

app.post('/todos', (req, res) => {
    const { task } = req.body;
    let newTodo = {
        task,
        "id": uuid(),
        "status": false
    }
    todos.push(newTodo);
    res.send({
        status: 'Task Added Successfully',
        newTodo
    });
})

// app.put('/', () => { })
// app.delete('/', () => { })


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});