function hello(){
    console.log(this.a);
}

let x = {a:1}
let y = {a:10}

hello.call(x);
hello.call(y);