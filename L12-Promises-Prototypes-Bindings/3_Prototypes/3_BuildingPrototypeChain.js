function Person() {

}

function Student() {

}

function Teacher() {

}

Person.prototype = Object.create(Object.prototype);
Student.prototype = Object.create(Person.prototype);
Teacher.prototype = Object.create(Person.prototype);

let s = new Student();

console.log(s.__proto__ == Student.prototype)
console.log(s.__proto__.__proto__ == Person.prototype)
console.log(s.__proto__.__proto__.__proto__ == Object.prototype)
console.log(s.__proto__.__proto__.__proto__.__proto__ == null)