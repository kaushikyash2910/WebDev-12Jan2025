let button = document.querySelector('button');
let h1 = document.querySelector('h1');

console.log(h1)
console.log(button)

h1.onclick = () => {
    console.log("I am heading");
}
/*
button.onclick = () => {
    console.log("I am clicked!");
}

button.onclick = () => {
    console.log("I am another function on button!");
}
*/

button.addEventListener('click',()=>{
    console.log("I am addevent listener wala click event!");
})

button.addEventListener('click',()=>{
    console.log("I am another addevent listener!");
})

h1.onmouseenter = ()=>{
    console.log("Mouse is now on heading element");
}