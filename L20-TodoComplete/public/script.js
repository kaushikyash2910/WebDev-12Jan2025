let taskForm = document.querySelector('#task-form');
let taskInput = document.querySelector('#task-input');
let taskList = document.querySelector('#task-list');

function addToTaskList(data) {
    taskList.innerText = ''; // Empty the tasklist first before you add
    // all the data elements to it
    data.forEach(item => {
        /*
        <span class="task-text">${task.text}</span>
        <div class="task-actions">
            <button class="complete-btn">${task.completed ? 'Undo' : 'Complete'}</button>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
        */

        let li = document.createElement('li');
        li.classList.add('task-item');
        li.innerHTML = `<span class="task-text">${item.task}</span>
        <div class="task-actions">
            <button class="complete-btn">${item.completed ? 'Undo' : 'Complete'}</button>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>`

        taskList.appendChild(li);
    })
}

function refreshTodos() {
    axios.get('/todos')
        .then(({ data }) => {
            addToTaskList(data);
        }).catch(err => {
            console.log(err);
        })
}


taskForm.addEventListener('submit', (ev) => {
    ev.preventDefault(); // stops the default behaviour of HTML element
    const taskName = taskInput.value;
    taskInput.value = '';

    axios.post('/todos', {
        task: taskName
    }).then(({ data }) => {
        refreshTodos();
    })
        .catch(err => {
            alert(err.message);
        })
})