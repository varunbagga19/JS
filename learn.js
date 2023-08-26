 
 fn();
 
 function fn(){
    let a =1;
    console.log(a);
     setTimeout(()=>{
        a = 10;
        console.log(a);
        
    },1000);
    console.log('world');
}


console.log("Hello")