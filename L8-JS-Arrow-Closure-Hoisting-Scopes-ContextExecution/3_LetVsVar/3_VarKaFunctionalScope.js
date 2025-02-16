
function fun(){
   
    console.log("Inside fun");
    var x = 10; // x hoist hoga function: fun ke andar
    // kyunki var ka scope is functional
    console.log("x inside fun: ",x);
}


fun();

console.log(x); // x ka scope was function fun 
// ke andar ka, toh x uske bahar nhi milega