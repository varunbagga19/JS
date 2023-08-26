let a = 10;
let b = 0;

{
    let c = 0;
    let a = 2;
    console.log(a);
}

console.log(a);

for(let i = 0;i<=5;i++){
    setTimeout(()=>{
        console.log(i);
    },1000)
}
for(var i = 0;i<=5;i++){
    setTimeout(()=>{
        console.log(i);
    },1000)
}