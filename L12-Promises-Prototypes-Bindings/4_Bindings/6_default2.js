function outerFun() {
    console.log("outerFun", this);

    function innerFun() {
        console.log("Inner fun", this);
    }

    innerFun();
}

let obj = { a: 1 };
outerFun.call(obj);

