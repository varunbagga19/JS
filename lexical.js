let name = "Varun";

function sayHI(){
    let greet = "hi"
    console.log(greet);
}
sayHI();
console.log(name,sayHI);

///////////////////////////////// Closures /////////////////////////////////////


function createUser(name){
    let greeting  = "HI";

    function greet(){
        return greeting+' '+ name+' '+'isCreated';
    }
    return  greet();
}

console.log(createUser("Varun"));


///////////////////////// IIFE ///////////////////////////////////////////////////

(function(){
    var x = 1;
})()

(function(a){
    var x = a;
})(2)


