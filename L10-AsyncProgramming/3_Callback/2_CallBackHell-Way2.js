function task1(cb){
    console.log("task1 starts");
    setTimeout(() => {
        console.log("task1 ends");
        cb(task3); // task2 call ho raha, task3 iska callback hai
    }, 2000);
}

function task2(cb){
    console.log("task2 starts");
    setTimeout(() => {
        console.log("task2 ends");
        cb(); // task3 call ho raha hai
    }, 2000);
}

function task3(){
    console.log("task3 starts");
    setTimeout(() => {
        console.log("task3 ends");
    }, 2000);
}
task1(task2); // task2 is passed as callback to task1