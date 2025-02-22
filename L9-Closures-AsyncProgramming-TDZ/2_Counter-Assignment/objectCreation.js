let a = 1;
let b = true;
let fun = function () {
    console.log("hello world");
}

let obj = {
    "a": a,
    "b": b,
    "c": fun
}

console.log(obj);

let obj1 = {
    a,
    b,
    c: fun
}

console.log(obj1);