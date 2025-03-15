function hello(fname, lname) {
    console.log(this, fname, lname);
}

let obj1 = { a: 1 }
let obj2 = { b: true }

hello();
// call(this, arguments);
hello.call(obj1, "Naman", "Arora");
hello.apply(obj2, ["Naman", "Arora"]);


let fun = hello.bind(obj1);
fun("Reet", "Agrawal");

let fun1 = hello.bind(obj1, "Reet");
fun1("Agrawal");

let fun2 = hello.bind(obj2, "Reet", "Agrawal");
fun2();