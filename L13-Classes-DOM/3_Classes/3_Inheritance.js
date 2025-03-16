class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// extend prototype ko link krega
class Student extends Person {
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks
    }
}

let s = new Student("Naman", 19, 88);
console.log(s)
console.log(s.__proto__ == Student.prototype);
console.log(s.__proto__.__proto__ == Person.prototype);
console.log(s.__proto__.__proto__.__proto__ == Object.prototype);
console.log(s.__proto__.__proto__.__proto__.__proto__ == null);