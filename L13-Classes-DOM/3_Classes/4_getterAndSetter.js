class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get Name() {
        return this.name
    }
    set Name(name) {
        this.name = name;
    }

    print() {
        console.log(this.name, this.age);
    }
}

let s = new Person("Naman", 19);
s.Name = "Naman Arora";
console.log(s.Name); // getter function is used like a property
s.print();
