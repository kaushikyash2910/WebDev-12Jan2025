function promiseFullfilled() {
    console.log("Assignment kar lia: FULFILLED");
}

function promiseRejected() {
    console.log("Assignment nahi kia: REJECTED");
}

console.log("promise kia ki assignment poora kar denge: PENDING");
let p = new Promise(function (res, rej) {
    setTimeout(() => {
        let assignmentKia = false;

        if (assignmentKia) res();
        else rej();
    }, 5000);
});

p.then(promiseFullfilled)
    .catch(promiseRejected);