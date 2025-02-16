// Arrow functions are lambda functions
let sayHello = ()=>{
    console.log("Hello from an arrow function");
}

sayHello();

let sum = (a,b)=>{
    return a + b;
}

console.log(sum(10,20));

// Single statement inside arrow function is always return by default
let sub = (a,b)=> a-b;
console.log(sub(10,5));
