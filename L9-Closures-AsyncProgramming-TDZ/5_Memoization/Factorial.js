function memoize(fn) {
    let cache = {}; 
    return function (n) {
        if(cache[n]) return cache[n];
        console.log("Running Factorial Finding Code");
        let ans = fn(n);
        return cache[n] = ans;
    }
}

let fact = memoize(function (n) {
    let ans = 1;
    for (let i = 1; i <= n; i++) {
        ans *= i;
    }

    return ans;
});

console.log(fact(5));
console.log(fact(5)); // Cache