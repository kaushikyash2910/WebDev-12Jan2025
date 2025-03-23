let input = document.querySelector('input');
let button = document.querySelector('button');

button.addEventListener('click', () => {
    if (input.value.trim()) {
        console.log(input.value);
    }

    input.value = ""
})