// Using Rest Operator in Js for sum
function sum(...number){
    return number.reduce((total, num) => total + num, 0);
}

console.log(sum(23,42,53));
console.log(sum(1,2,3,4,5,5));



//Example 2: Destructuring Arrays
const numbers = [1,2,4,5,6,7]
const [first, second, ...rest] =numbers

console.log(rest);
console.log(first);
console.log(second);


//Example 3: Destructuring Objects
const user ={
    name: 'Hamza',
    age: 20,
    email: 'hamza@gmail.com'
}

const {name, age, ...restt} = user

console.log(restt);
console.log(name);
console.log(age);

//Using rest Operator for array concatenate
const fruits = ['apple', 'mango', 'orange'];
const berries = ['blueberry', 'strawberry'];

const fruitsAndBerries = [...fruits, ...berries];

console.log(fruitsAndBerries);


// 2 Using rest Operator for array concatenate
const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];

const arr1AndArr2 = [...arr1, ...arr2];
console.log(arr1AndArr2);

//Using rest operator for join abject
const flying = { wings: 2 };
const car = { wheel: 4 };
const flyingCar = { ...flying, ...car };

console.log(flyingCar);

//Add new members to arrays without using the push() method
let veggies = ['onion', 'tomato', 'parsley'];
veggies = [...veggies, 'beetroot', 'carrot'];

console.log(veggies);

//Convert a string to an array using the spread operator
const  greeting = 'Hello';
const arrayOfChar = [...greeting];

console.log(arrayOfChar);