function getArray1() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res([1, 3, 5, 7, 101])
        }, 1000);
    });
}

function getArray2() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res([2, 4, 6, 8, 10, 111])
        }, 3000);
    });
}

Promise.race([getArray1(), getArray2()]).then((data) => {
    console.log(data);
}).catch(err => {
    console.log(err);
})