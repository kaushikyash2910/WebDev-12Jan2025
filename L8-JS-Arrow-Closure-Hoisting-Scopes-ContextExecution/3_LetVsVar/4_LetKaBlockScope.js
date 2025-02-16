let x = 10;

function fun() {
    // Error dega, because x mei hoisting allowed nahi hoti
    // toh same scope ke andar, we cannot use x before initialisation
    console.log(x);

    let x = 20;

    console.log(x);
}

fun();

console.log(x);

