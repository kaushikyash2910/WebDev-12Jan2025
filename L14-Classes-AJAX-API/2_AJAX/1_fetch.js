let url = 'https://jsonplaceholder.typicode.com/todos/'

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
        console.log(data);
    })
    .catch(msg => {
        console.log(msg);
    })

let sum = (a, b) => a + b;
console.log(sum(10,20));