function download() {
    return new Promise((res, rej) => {
        console.log("Download starts");
        setTimeout(() => {
            console.log("Download completed");
            res(); // compress
        }, 2000);
    })
}

function compress() {
    return new Promise((res, rej) => {
        console.log("compress starts");
        setTimeout(() => {
            console.log("compress completed");
            res(); // upload
        }, 2000);
    })
}

function upload() {
    return new Promise((res, rej) => {
        console.log("Upload starts");
        setTimeout(() => {
            console.log("Upload completed");
            // res();
        }, 2000);
    })
}
// We want to execute all these functions sync
// download -> compress -> upload

download() // download ka res is compress
    .then(compress) // compress ka resolve is upload
    .then(upload) // upload ka res likha nhi hai abhi
    .then(() => { // upload ka resolve function hai
        console.log("All done");
    })  