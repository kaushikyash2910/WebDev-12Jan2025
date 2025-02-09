let person = {
    name : 'Vishesh',
    age: 21,
    college: 'Koi Nahi',
    "": "Koi empty key ki value",
    " ":"Mei ek space key ki value hoon"
}

// person.friend = "Nidhi";
// name, age and college: They are Keys
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.college);
// console.log(person.""); // Yeh nahi chlega

// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["college"]);
// console.log(person[""]);
// console.log(person[" "]);

console.log("Using FOR-IN loop printing data: ");
// For every key:k in object person
for(var k in person){
    console.log(k, person[k])
}
