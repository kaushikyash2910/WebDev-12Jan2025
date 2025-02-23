let id = setInterval(function () {
    console.log("Hello");
}, 1000);


setTimeout(() => {
    clearInterval(id); // setInterval ko rokne ke liye we use this
}, 5000);