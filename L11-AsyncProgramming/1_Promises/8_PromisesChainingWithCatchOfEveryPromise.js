let p = new Promise((res, rej) => {
    res(2);
})

p
    .then((d) => {
        return new Promise((res, rej) => {
            let kyaAnswerReturnKrey = false;
            if (kyaAnswerReturnKrey) res(d * 2);
            else rej("Rejected kyunki answer return krna allowed nhi hai");
        })
    })
    .catch(msg => {
        console.log(msg)
    })
    .then((d) => {
        return new Promise((res, rej) => {
            res(d * 2);
        })
    })
    .then((d) => {
        console.log(d)
    })
