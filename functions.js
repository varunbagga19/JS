// console.log(hello(2,3));// arguments


function hello(a,b){// parameters
return a+b;
}

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
    }
    return `${username} just logged in`;
}

loginUserMessage("varun")




