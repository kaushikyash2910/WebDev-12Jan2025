

// To create a new counter everytime i need it

let counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter()); // 4

let counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3`


let counter2 = createCounter();
console.log(counter2()); // 1
console.log(counter2()); // 2
console.log(counter2()); // 3

console.log(counter()); // 5