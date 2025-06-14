const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'hbs');
let todos = [];

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Todo APP',
        todos,
        todosPresent: todos.length > 0 ? true : false
    });
})

app.get('/addtodo', (req, res) => {
    const { name, isAxios } = req.query;
    todos.push(name);
    if(isAxios === 'true'){
        return res.send(todos);
    }
    res.redirect('/');
    // res.render('index',{
    //     todos
    // })

})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});