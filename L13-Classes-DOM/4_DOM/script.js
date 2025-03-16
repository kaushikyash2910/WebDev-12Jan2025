let ul = document.createElement('ul');

ul.classList.add('movies');
ul.setAttribute('id', 'movies');
console.log(ul);

let div = document.querySelector('.myDiv');
console.log(div)

console.log(ul)
div.appendChild(ul);

let movies = ['Race 3', 'Harry Potter', 'Terminator']

for (let m of movies) {
    let li = document.createElement('li');
    li.innerText = m;
    ul.appendChild(li);
}

// ul ka parentElement
console.log(ul.parentElement);
console.log(ul.parentElement.parentElement);
console.log(ul.childNodes);

// sibling
console.log(div.nextElementSibling);