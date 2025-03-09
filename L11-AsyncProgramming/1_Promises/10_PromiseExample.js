function download() {
    return new Promise((res, rej) => {
        console.log("Download starts");
        setTimeout(() => {
            res("Download completed");
        }, 2000);
    })
}

function compress() {
    return new Promise((res, rej) => {
        console.log("compress starts");
        setTimeout(() => {
            res("compress completed");
        }, 2000);
    })
}

function upload() {
    return new Promise((res, rej) => {
        console.log("Upload starts");
        setTimeout(() => {
            res("Upload completed");
        }, 2000);
    })
}
// We want to execute all these functions sync
// download -> compress -> upload

download()
    .then((msg) => {
        console.log(msg)
        compress()
            .then((msg1) => {
                console.log(msg1);
                upload()
                    .then(msg2 => {
                        console.log(msg2)
                    })
            })
    })