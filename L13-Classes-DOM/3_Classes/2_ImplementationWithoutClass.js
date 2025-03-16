function Person(name, age) {
    // this->{}
    this.name = name
    this.age = age
}

Person.prototype = Object.create(Object.prototype);

Person.prototype.print = function () {
    console.log(`Hello, ${this.name} and age: ${this.age}`)
}


let p = new Person("kartik", 25);
console.log(p)
