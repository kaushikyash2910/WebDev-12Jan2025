let url = 'https://jsonplaceholder.typicode.com/todos/'
let button = document.querySelector('button');
let ul = document.querySelector('ul');
function addToTaskList(data) {
    for (let i = 0; i < data.length; i++) {
        // console.log(data[i].title);
        let li = document.createElement('li');
        li.innerText = data[i].title;
        ul.appendChild(li);
    }
}

button.addEventListener('click', () => {
    axios.get(url)
        .then(res => {
            // console.log(res.data)
            addToTaskList(res.data);
        })
        .catch(err => {
            console.log(err);
        })
})