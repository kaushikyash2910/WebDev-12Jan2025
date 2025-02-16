let x = 10;

function fun() {
    // Error dega, because x mei hoisting allowed nahi hoti
    console.log(x);

    let x = 20;

    console.log(x);
}

fun();

console.log(x);

