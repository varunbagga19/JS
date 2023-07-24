// const promiseOne = new Promise(function(resolve,reject){
//     //Do an async task
//     //DB calls, cryptography, network
//     setTimeout(()=>{
//         console.log("heloo asynchrous task is completed")
//         resolve()
//     },3000);
// }) 

// promiseOne.then(function(){
//     console.log("promisse consumed");
// });

// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("2nd task is on the way")
//         resolve()
//     },2000)
    
// }).then(()=>{
//     console.log("task 2 is completed")
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({user:"varun bagga",email:"chaiasdfgh"});
//     },2000)
// })

// promiseThree.then(function(user){
// console.log(user);
// })


// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let error = false;
//         if(!error){
//             resolve("Hemlo ji im from rsoleve")
//         }else{
//             reject('Error: something went wrong')
//         }
//     },2000)
// })

//  promiseFour
//  .then((user)=>{
//     console.log(user);
//     return user.username;
// })
// .then(function(userName){
//     console.log(userName);
// })
// .catch(function(error){
//     console.log(error);
// }).finally(function(){
//     console.log("idhr ich toh mien aayga bidu,chaahe kuch ho ya naa ho");
// })


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:"jaasasd",password:"!@34567"})
        }else{
            reject('Error: js went wrong')
        }
    },2000)
})

async function consumePromiseFive(){
   try {const response = await promiseFive
    console.log(response); } catch(error){
        console.log(error)
    }
}

// consumePromiseFive();


async function getAllUsers(){
   try{ const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
     }catch(error){
        console.log(error);
     }
}

getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data)=>{
console.log(data);
})
.catch((error)=>{
    console.log(error)
})

