let makePerson = {
    print(name,age){
        console.log(`Hello, ${this.name} and age: ${this.age}`)
    }
}
function Person(name,age){
    let p = Object.create(makePerson);
    p.name = name;
    p.age = age;
    return p;
}

let p = Person("Kartik",25);
p.print();