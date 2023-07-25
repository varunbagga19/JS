// // singleton
// // Object.create

// //object literals


// const mySym = Symbol("key1");


// const objUser = {
//     name:"hitesh",
//     "full Name":"Varun baga",
//     [mySym] : "myKey1" ,// using this as symbol
//     age:12,
//     location:"delhi",
//     "email":"1234567",
//     isLoggedIn: true,
//     lastLogindays :["Monday","saturday"],
// }

// console.log(objUser);
// // console.log(objUser.email);
// // console.log(objUser["full Name"]);
// // console.log(objUser["email"]);
// // console.log(typeof objUser[mySym]);

// objUser.greeting = function(){
//     console.log(`Hello js user, ${this.name}`);
// };

// console.log(objUser.greeting());


// ++++++++++++++++++++++++++ Part 2 +++++++++++++++++++++++++++++++++++++++

// const tinderUser = new Object()

//  tinderUser.id = "123asd"
//  tinderUser.name = "Samy"
//  tinderUser.isLoggedIn = true


// // console.log(tinderUser);


// const regularUser = {
//     email:"varun@gmail.com",
//     fullName:{
//         userfullName:{
//             firstname:"hitesh",
//             lastname:"choudhary"
//         }
//     }
// }

// // console.log(regularUser.fullName.userfullName.firstname)

// const obj1 = {1:"a",2:"b"};
// const obj2 = {3:"a",4:"b"};
// const obj3 = {3:"a",4:"b"};
// const obj4 = {3:"a",4:"b"};

// const  arrv = [obj1,obj2,obj3,obj4];
// // const obj3 = {...obj1,...obj2};

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

//++++++++++++++++++++++++++ part 3 ++++++++++++++++++++++++++++++++++

const course = {
    name:"JS",
    price:"free",
    instructor:"hitesh"
}

const {price:paisa} = course;

console.log(paisa);



