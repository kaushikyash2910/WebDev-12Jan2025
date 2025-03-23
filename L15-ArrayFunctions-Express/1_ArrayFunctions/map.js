let arr = [1, 2, 3, 4, 5];

let newArr = arr.map((element, index, arr) => {
    // console.log(element,index,arr)
    return element*element;
})

console.log(newArr);
console.log(arr);