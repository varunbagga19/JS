function op(operation){
    return function(a){
        return function(b){
            return operation === 'add' ? a+b : a-b;
        }
    }
}


const add3 = op('add')(3);
const sub3 = op('sub')(3);
const add = op('add');

console.log(add3(6));
console.log(sub3(6));
console.log(add(6)(5));


