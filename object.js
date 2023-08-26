let person = {name: 'Varun',age:20};
let human = person;


// nested objects =
let bagga = {
    name:'bagga',
    address:{
        city:"deli",
        state:"delhi"
    }
}

// Object.assign() ,shallow copy

let newPerson = Object.assign({},person);

console.log(newPerson);


// DEEP COPY 


let newBagga = JSON.parse(JSON.stringify(bagga));
console.log(newBagga);