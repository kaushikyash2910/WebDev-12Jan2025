function contestDenge(kyaContestDia) {
    return new Promise((res, rej) => {
        // kyaContestDia ? res() : rej();
        if (kyaContestDia) res()
        else rej()
    })
}

// contestDenge to be a promise
// let p = new Promise(); // this doesnt tell ki promise kya hai?
let p = contestDenge(true); // This actually tells promise is about giving contest

p.then(() => {
    console.log("Contest de diya");
})
    .catch(() => {
        console.log("Contest nahi diya")
    })


