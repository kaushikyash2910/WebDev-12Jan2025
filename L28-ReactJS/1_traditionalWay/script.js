function createChild(state) {
    /*
    state = {
        taskName: 'Learn reactJS',
        description: Function with reactJS,
        id: 1
    }
    */
    const div = document.createElement('div');
    const firstChild = document.createElement('div');
    const secondChild = document.createElement('div');
    const thirdChild = document.createElement('button');

    div.setAttribute('class', 'childElement');
    div.setAttribute('id', state.id);
    firstChild.setAttribute('class', 'task');
    secondChild.setAttribute('class', 'task-description');
    thirdChild.setAttribute('class', 'remove-task');

    firstChild.innerText = state.taskName;
    secondChild.innerText = state.description;
    thirdChild.innerText = "❌";

    div.appendChild(firstChild);
    div.appendChild(secondChild);
    div.appendChild(thirdChild);

    return div;
}

function setTask(states) {
    const container = document.getElementById('container');
    container.innerText = '';
    states.forEach(state => {
        let childElement = createChild(state);
        container.appendChild(childElement);
    })
}

setTask([
    {
        taskName: 'Learn ReactJs',
        description: 'Fun with ReactJS',
        id: 1
    },
    {
        taskName: 'Learn CPP',
        description: 'Fun with CPP',
        id: 2
    }
]);