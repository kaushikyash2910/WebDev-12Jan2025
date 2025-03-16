class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Person.prototype ke andar create ho jaega
    print() {
        console.log(`Hello, ${this.name} and age: ${this.age}`)
    }
}

// console.log(typeof Person);// function
let p = new Person("Kartik", 25);
console.log(Person.prototype);
// p.print = function(){ // Method override
//     console.log(`Yehlo mera, ${this.name} and umar: ${this.age}`)
// }
p.print();