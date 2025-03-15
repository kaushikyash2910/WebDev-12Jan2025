function hello() {
    console.log("Hello World");
}

hello();

hello.x = "I am a key inside fnction";
console.log(hello.x);

// Let's see how object works
let obj = {
    a: 1,
    b: 'Hello World'
}
obj.c = "I am key c ki value"
console.log(obj.a); // a key hai and obj.a uski value
console.log(obj.b);
console.log(obj);