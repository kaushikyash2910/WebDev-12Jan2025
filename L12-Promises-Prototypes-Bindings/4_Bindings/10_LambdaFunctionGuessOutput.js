var a = 10;
function fun() {
    console.log("fun", this);
    let hello = () => {
        console.log(this.a);
    }
    let x = { a: 1 }
    let y = { a: 10 }

    hello.call(x);
    hello.call(y);
}

let outerObj = {
    description: "I am outer obj ki key",
    a: "Mei outerObj ka a hoon"
}

fun.call(outerObj);