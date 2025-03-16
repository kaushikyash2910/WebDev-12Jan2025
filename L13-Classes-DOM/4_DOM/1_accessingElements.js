// Access class:heading element 
let heading = document.getElementsByClassName('heading'); // Collection
console.log(heading)

let h = document.getElementById('heading'); // Single Element
console.log(h)

// Yeh top se down jaega aur jis bhi element par sbse pehle heading
// class milegi usse select kr dega
let h1 = document.querySelector('.heading'); // Will provide only one element
console.log(h1);

let h2 = document.querySelector('#heading'); // Single element
console.log(h2);

// To fetch all the elements that has class heading
let h3 = document.querySelectorAll('.heading'); // Will provide all elements
console.log(h3);