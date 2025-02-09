// This is how we create a function normally.
function add(a,b){
    return a+b;
}

console.log(add(10,20));

// Functions are datatypes as well they can be stored in a variable too.
var fun = function hello(){
    console.log("Hello");
}

fun();

// We can skip the name of function if we are assigning it to a variable
var x = function(){
    console.log("Hi, I am X");
}

x();