let arr: number[] = [1, 2, 3, 4, 5];

console.log(arr);

let names: Array<string> = ["Kartik", "Monu", "Abhishek"];
console.log(names);

let arr1: (number | string)[] = [1, "Hello"];
console.log(arr1);

interface Person {
    name: string,
    age: number
}

let personArray: Person[] = [
    {name: 'Raja',age:20},
    {name: 'Naman',age:21},
]

console.log(personArray);


function getFirst<T>(arr: T[]): T {
  return arr[0];
}

getFirst<string>(["a", "b", "c"]); // returns "a"
getFirst<number>([10, 20, 30]);    // returns 10


interface newPerson {
  name: string;
  age?: number; 
}

let x: newPerson = {
    name: 'Hello'
}
console.log(x);