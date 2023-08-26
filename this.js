function sayHI(){
    console.log("hi "+ this.name) ;
}

sayHI();


let obj1 = {name:"varun"};

obj1.say = sayHI;

obj1.say();