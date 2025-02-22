function add(num){
    if(num == undefined) return 0; // Agar num hi nahi aaya kuch toh 0 return hoga

    return function fun(n){
        if(!n) return num;
        num+=n;

        return fun;
    }
}



// add(1)(2)(3)(4)() // 10
// add(1)(2)(3)() // 6
// add(1)(2)() // 3
console.log(add()) // 0
console.log(add(1)()) // 1
console.log(add(1)(2)()) // 3
console.log(add(1)(2)(3)()) // 6