let url = "https://codingblocks.com/movies/dsa.mp4";
// Create an Object from the url
/*
{
    "codingblocks.com":{
        movies: ["dsa.mp4","web.mp4"]
    }
}
*/
let a = url.split('/');
console.log(a);

var company = a[2]; // codingblocks.com
var category = a[3]; // movies
var content = a[4]; // dsa.mp4

let obj = {};

if(!obj[company]){ // Agar obj ke andar codingblocks.com naam ki key nahi hai
    obj[company] = {}; // Toh use key ko insert kardo
    /* // After this our obj would look like 
    obj = {
        "codingblocks.com": {}
    }
    */
}

// category: 'movies'
// obj = {
//     "codingblocks.com": {}
// }
if(!obj[company][category]){
    obj[company][category] = []
    /*
    obj = {
        "codingblocks.com": {
            movies: []
        }
    }
    */
}

obj[company][category].push(content);
console.log(obj)