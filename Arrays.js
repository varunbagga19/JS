//  //__array


//  const myArray = [0,1,2,3,4,5,true,"hitesh"];
//  const myHeores = ["ironman","spidy","hidy"];

//  const myArr2 =  new Array(1,2,3,4,5,6);
// //  console.log(myArr2);


// //  // Array methods

// //  myArr2.push(6);
// //  console.log(myArr2);


// //  myArr2.unshift(8); // add at the start of the array

// // const newArr = myArr2.join();

// //  console.log(myArr2);
// //  console.log(typeof newArr);

// // slice, splice


// console.log("A ",myArr2);

// const myn1 = myArr2.slice(1,3);

// console.log(myn1);
// console.log("B ",myArr2);


// console.log("A ",myArr2);

// const myn2 = myArr2.splice(1,3);
// console.log("c ",myArr2);
// console.log(myn2);


// ++++++++++++++++++++++++++++++++ Hello ++++++++++++++++++++++++++++++++++=

const marvel = ["t","i","h"];
const dc = ["s","b","ww"];

// marvel.push(dc);
// console.log(marvel);
// const m = marvel.concat(dc);
// console.log(m);

// spread operator

const all_new_heors =  [...marvel,...dc,"varun"];

// console.log(all_new_heors);

const nAa = [1,2,3,[,4,5,6],7,[6,7,[4,5]]];

const realA = nAa.flat(Infinity);

// console.log(realA);

console.log((Array.isArray(["Hitu"])));
console.log(Array.from("Varun Bagga"));
console.log(Array.from({Varun:"Bagga"}));// interesting

let score1 = 100;
let score3 = 200;
let score2 = 300;

console.log(Array.of(score1,score2,score3));



