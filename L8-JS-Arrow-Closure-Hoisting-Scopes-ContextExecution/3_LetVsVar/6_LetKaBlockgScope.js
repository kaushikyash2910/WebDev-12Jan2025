let x = 10;

function fun() {
    console.log(x);

    var x = 20;

    console.log(x);
}

fun();

console.log(x);
