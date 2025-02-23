function task1(cb) {
    console.log("task1 starts");
    setTimeout(() => {
        console.log("task1 ends");
        cb(function task3(){
            console.log("task3 starts");
            setTimeout(()=>{
                console.log("task3 ends");
            },2000);
        }); // calling task2
    }, 2000);
}

task1(function task2(cb){
    console.log("task2 starts");
    setTimeout(()=>{
        console.log("task2 ends");
        cb(); // calls task3
    },2000);
});