function delay1Sec() {
    let currentTime = new Date().getTime();

    while (new Date().getTime() 
        - 
    currentTime < 1000) {

    }
}

function delayNsec(n) {
    for (let i = 0; i < n; i++) delay1Sec();
}

// delayNsec(5);
console.log("Hello World! 1 sec is over")