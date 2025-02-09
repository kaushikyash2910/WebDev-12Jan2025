var a = "hello world learning js";

console.log(a)

// 1. Learning to split a string and form an array
var newArr = a.split(' ');
console.log(newArr);
console.log(a); // Original string ko change nahi krta yeh

// 2. Learning to create a string and from an array
let arr = [1,2,3,4,"Get on the dance","floor"];
let newStr = arr.join(' ');
console.log(newStr)

console.log(arr); // original array effect nahi hoga

// 3. Finding the index of a word in a string
console.log(a.indexOf("world"));
console.log(a.indexOf("code"));
