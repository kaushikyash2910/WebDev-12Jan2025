"use strict";
function createStudent(name, age) {
    return {
        name,
        age,
        rollNumber: 1,
        branch: "CSE",
    };
}
function newStudent(name, age) {
    return {
        name,
        age,
        rollNumber: 1,
        branch: "CSE",
    };
}
console.log(newStudent("Darshana", 19));
