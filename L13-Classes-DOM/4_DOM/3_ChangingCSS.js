let div = document.querySelector('#myDiv'); // Single element

let flag = true;
setInterval(() => {
    if (flag) {
        div.style.color = 'blue';
        div.style.border = '1px solid black';
        div.style.backgroundColor = 'orange';
    }
    else{
        div.style.color = 'white';
        div.style.border = '1px solid black';
        div.style.backgroundColor = 'black';
    }
    flag = !flag;
}, 1000);

div.classList.add('anotherclass')