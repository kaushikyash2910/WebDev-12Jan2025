// Loose Equality (==)
// Strict Equality (===)

let a = 10;
let b = 10;

console.log(a == b);

a = 10;
b = '10'; // Type conversion
// Bada datatype gets converted to smaller datatype
// string convert hua integer mei -> b = 10
console.log(+b);
console.log("a == b", a == b);  // true
console.log("a === b", a === b);// false

b = "Hello World";
console.log(+b); // NaN(Not a Number)