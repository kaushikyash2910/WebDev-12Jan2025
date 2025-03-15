function Person() {

}

function Student() {

}

function Teacher() {

}

let s = new Student();
let t = new Teacher();
let p = new Person();

console.log(Student.prototype.__proto__ == Object.prototype)
console.log(Teacher.prototype.__proto__ == Object.prototype)
console.log(Person.prototype.__proto__ == Object.prototype)