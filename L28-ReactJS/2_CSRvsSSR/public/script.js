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
    const thirdChild = document.createElement('button');

    div.setAttribute('class', 'childElement');
    div.setAttribute('id', state.id);
    firstChild.setAttribute('class', 'task');
    thirdChild.setAttribute('class', 'remove-task');

    firstChild.innerText = state;
    thirdChild.innerText = "❌";

    div.appendChild(firstChild);
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

let form = document.getElementById('form');
form.addEventListener('submit', async (ev)=>{
    ev.preventDefault();

    let {data} = await axios.get('/addtodo',{
    params: {
      name: document.getElementById('name').value,
      isAxios: true
    }
  })

  setTask(data);
})
// setTask(backend_todo_array);