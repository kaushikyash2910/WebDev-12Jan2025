function callFun(fun) {
    fun();
}


function helloWorld() {
    console.log("hello World!!!");
}


callFun(helloWorld); // We can pass function as arguments