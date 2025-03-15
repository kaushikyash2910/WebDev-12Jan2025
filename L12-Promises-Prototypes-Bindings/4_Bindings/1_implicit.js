let obj = {
    a: 1,
    print: function(){
        console.log(this);
        this.b = "Hello"
    }
}

obj.print();
console.log(obj);