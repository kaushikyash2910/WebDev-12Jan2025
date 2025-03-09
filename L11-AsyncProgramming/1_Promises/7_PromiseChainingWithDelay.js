let p = new Promise((res,rej)=>{
    setTimeout(()=>{
        res(2); // 2^1 find kar lia
    },2000);
})

p.then((d)=>{
    return d*2
})
.then((d)=>{
    return d*2
})
.then((d)=>{
    console.log(d);
})