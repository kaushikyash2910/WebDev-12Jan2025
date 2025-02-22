function outerFun() {
    let x = 1;
    function innerFun() {
        x++;
        function innerMostFun() {
            x++;
            console.log(x);
        }
        return innerMostFun;
    }

    return innerFun;
}
let fun = outerFun(); // innerFun ko return krega
let f1 = fun(); // innerMostFun ko return karega
let f2 = fun(); // innerMostFun ko return karega
f1();
f1();
f1();
f2();
f2();
f2();


