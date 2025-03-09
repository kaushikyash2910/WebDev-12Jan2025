function assignmentKarLia() {
    console.log("Job ke liye appear kar skte hai")
}

function assignmentNahiKia() {
    console.log("Assignment ki deadline badha di")
}
// new ek keyword hai abhi ke liye just remember this
let p = new Promise((res, rej) => {
    let taskDone = true;
    
    if (taskDone) res();
    else rej();
});


p
    .then(assignmentKarLia)
    .catch(assignmentNahiKia)