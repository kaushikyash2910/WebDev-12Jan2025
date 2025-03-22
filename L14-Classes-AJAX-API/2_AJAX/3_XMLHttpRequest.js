let url = 'https://jsonplaceholder.typicode.com/todos/'
let button = document.querySelector('button');
let ul = document.querySelector('ul');
function addToTaskList(data){
    for(let i = 0 ; i < data.length ; i++){
        // console.log(data[i].title);
        let li = document.createElement('li');
        li.innerText = data[i].title;
        ul.appendChild(li);
    }
}

let xhr = new XMLHttpRequest();
// 1. Setup URL jaha request jaegi
xhr.open('GET', url); // Get request bhejo on URL

// 2. Agar data successfully aa gaya then
xhr.onload = (res) => {
    // console.log(res.currentTarget.response);
    let data = JSON.parse(res.currentTarget.response);
    // console.log(data);
    addToTaskList(data);
}

// 3. Error aane par
xhr.onerror = (msg) => {
    console.log(msg);
}

// 4. To send request
button.addEventListener('click', () => {
    xhr.send(); // This is used to send request
})