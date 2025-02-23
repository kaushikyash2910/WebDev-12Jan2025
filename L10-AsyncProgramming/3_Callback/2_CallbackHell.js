// Nested Callbacks are called as Callback Hell
function task1(cb) {
    console.log("task1 starts");
    setTimeout(() => {
        console.log("task1 ends");
        cb(function task3() {
            console.log("task3 starts");
            setTimeout(() => {
                console.log("task3 ends");
            
            }, 2000);
        }); // task2 is callback of task1
    }, 2000);
}

task1(function task2(cb) {
    // Call back of task1 function
    console.log("task2 starts");
    setTimeout(() => {
        console.log("task2 starts");
        cb();
    }, 2000);
});