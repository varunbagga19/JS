// Primitive 

// 7 types :String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id == anotherId);



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ['shaktiman','naagraj','doga'];
let myObj = {
    name:"varun",
    age : 22,
}

const myFunction = function(){
    console.log("hello world");
}