let p = new Promise((res, rej) => {
    res(); // this promise will get fulfilled everytime
})

p.then(() => {
    console.log("1st promise poora hua");

    // A promise always returns a promise
    return "2nd promise kar diya";
})
    .then((data) => {
        console.log(data);

        console.log("2nd promise poora ho gaya");
    })
