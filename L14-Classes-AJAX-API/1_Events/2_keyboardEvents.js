let input = document.querySelector('input');
let movieInput = document.querySelector('#movie');

input.addEventListener('keydown',(ev)=>{
    // console.log("Key pressed");
    // console.log(ev)
    console.log(ev.key)
    console.log(ev.target);

})

movieInput.addEventListener('keydown',(ev)=>{
    // console.log("Key pressed");
    console.log(ev.target);
    console.log(ev.key)
})