var a = "Hello World"
//  output: H-e-l-l-o- -W-o-r-l-d

var ans = "";
for (let i = 0; i < a.length; i++) {
    ans += a[i];
    if(i < a.length-1) ans += '-';
}

console.log(ans);