let p = new Promise((res, rej) => {
    res(2); // 2^1 find kar lia
})

p
    .then((d) => {
        return d * 2
    })
    .then((d)=>{
        return d*2
    })
    .then(d=>{
        console.log(d);
    })
    