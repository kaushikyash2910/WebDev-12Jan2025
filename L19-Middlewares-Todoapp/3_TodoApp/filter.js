let arr = [1, 2, 3, 4, 5, 6, 7];

arr = arr.filter((e, i, ar) => {
    return e%2 == 0;
})

console.log(arr);