// Will give answer after 2 seconds
function add(a, b, cb) {
    console.log("Addition starts");
    setTimeout(() => {
        console.log("Addition Ends");
        // Yeh function 2 seconds ke baad chalega
        let ans = a + b;

        cb(ans); // isAdditionOdd wala function tabhi chlega jab ans pata chlega
    }, 2000);
}

// Will give answer after 2 seconds
function isAdditionOdd(val) {
    console.log("Checking Odd or not starts");
    setTimeout(() => {
        console.log("Checking Odd or not completed");
        if (val % 2 == 0) console.log("Even");
        else console.log("Odd");
    }, 2000);
}

add(10, 20, isAdditionOdd);