const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));

let todos = [];

app.get('/addtodo', (req, res) => {
    const {name} = req.query;

    todos.push(name);

    let todosDataHTML = generateHTML(todos);

    res.send(`<!DOCTYPE html>
        <html lang="en">

        <head>
            <title>Document</title>
        </head>

        <body>
            <h1>Todo Application</h1>

            <form action="/addtodo" method="GET">
                <input type="text" name="name"> <br>
                
                <button type="submit">Add Task</button>
            </form>
        </body>



        </html>`);
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});