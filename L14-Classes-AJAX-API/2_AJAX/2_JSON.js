let person = {
    name: 'ABC',
    age: 10
}


let x = JSON.stringify(person);
console.log(x);
console.log(JSON.parse(x));