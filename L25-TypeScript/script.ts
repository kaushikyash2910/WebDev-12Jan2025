function createStudent(
  name: string,
  age: number
): {
  name: string;
  age: number;
  rollNumber: number;
  branch: string;
} {
  return {
    name,
    age,
    rollNumber: 1,
    branch: "CSE",
  };
}

// ------------------------------------------------------------------------------
// interface Student {
//   name: string;
//   age: number;
//   rollNumber: number;
//   branch: string;
// }

// function newStudent(name: string, age: number): Student {
//   return {
//     name,
//     age,
//     rollNumber: 1,
//     branch: "CSE",
//   };
// }

// console.log(newStudent("Darshana", 19));

// ------------------------------------------------------------------------------
type Student = {
  name: string;
  age: number;
  rollNumber: number;
  branch: string;
};

function newStudent(name: string, age: number): Student {
  return {
    name,
    age,
    rollNumber: 1,
    branch: "CSE",
  };
}

console.log(newStudent("Darshana", 19));
