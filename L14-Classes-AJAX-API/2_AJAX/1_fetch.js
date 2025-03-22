let url = 'https://jsonplaceholder.typicode.com/todos/'
let ul = document.querySelector('ul');
function addToTaskList(data){
    for(let i = 0 ; i < data.length ; i++){
        // console.log(data[i].title);
        let li = document.createElement('li');
        li.innerText = data[i].title;
        ul.appendChild(li);
    }
}
// console.log(url);
// fetch(url)
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(msg => {
//         console.log(msg);
//     })

fetch(url)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        addToTaskList(data);
    })
    .catch(msg => {
        console.log(msg);
    })

let sum = (a, b) => a + b;
console.log(sum(10,20));