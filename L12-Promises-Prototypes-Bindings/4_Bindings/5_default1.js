function innerFun() {
    console.log("innerFun", this);
}

let obj = { a: 1 };
innerFun.call(obj);
