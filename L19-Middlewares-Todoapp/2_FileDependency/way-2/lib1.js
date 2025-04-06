const lib2 = require('./lib2')

console.log("Inside lib1");

let a = 1;

module.exports = {
    "a": a,
    lib2
}