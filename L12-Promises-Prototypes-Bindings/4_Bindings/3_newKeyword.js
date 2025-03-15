// Student would be used as constructor function. Therefore, hum ise kuch
// return nahi krenge kabhi bhi
function Student(name, age) {
    // this: {} // Naya execution context banaega
    this.name = name;
    this.age = age;
    // this: {name, age} // After 3rd and 4th line this aisa dikhega
}

// Upr se execution context aaega
/*
this: {name: 'Naman', age: 12} 
*/
let s = new Student("Naman", 12);

let s1 = new Student("Pawan", 15); // this:{name: 'Pawan', age: 15} 
console.log(s);
console.log(s1);
// new keyword is used when we want to use function as Constructor function