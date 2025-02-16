function generateFun() {

    let a = 10, b = 20;

    function sum() {
        console.log(a + b);
    }

    return sum;
}

// Jis anonymous object ke andar saare parent ke variables lekar jaega
// us cheez ko hum closure kehte hai
// Hum kisi function ke closure ko access nahi kr skte aise directly, need padegi toh function
// closure se parent variables ka data khud le lega, but closure aise directly hume nhi milega

let newFun = generateFun();
console.log(newFun)
// console.log(newFun.toString())
// newFun();
