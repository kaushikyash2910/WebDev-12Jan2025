let arr = [1,2,3,4,5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

arr[8] = 1.11;
arr[9] = true;
arr[10] = "Hello";
console.log(arr);

for (const e of arr) {
    console.log(e)
}


let x = [];
// push : To insert at End, pop: To remove from end
x.push('Hello'); 
// x.pop();
// unshift: To insert at front, shift: To remove from front
x.unshift("World");
x.pop();
console.log(x);