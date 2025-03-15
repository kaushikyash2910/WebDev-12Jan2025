function outerFun() {
    console.log("OuterFun", this); // Global or window
}

outerFun();