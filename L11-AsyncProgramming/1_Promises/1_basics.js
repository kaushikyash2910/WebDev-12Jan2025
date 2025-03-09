function fulfill() {
    console.log("Promise poora hua");
}

function tootGaya() {
    console.log("Promise toot gya");
}

// Create a promise p
let p = new Promise((resolve, reject) => {
    let isItRaining = true;
    // definition yaha aati hai promise ke andar ki
    // resolve call krte hai poora hone par
    // reject call krte hai tootne par
    if(isItRaining) reject();
    else resolve();
});

// promise p ke poore hone par fulfill function chal jaaye, fail hone par
// tootGaya function chal jaaye
p.then(fulfill, tootGaya);
// or
// p.then(fulfill).catch(tootGaya);