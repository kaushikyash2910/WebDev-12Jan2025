let arr = [1, 2, 3, 4, 5];

let val = arr.reduce((acc, el, indx, arr) => {
    return acc + el;
}, 0) ; //0 is the initial value of acc

console.log(val);

/*
let val = arr.reduce((acc, el, indx, arr) => {
    return acc + el;
})

console.log(val);
*/