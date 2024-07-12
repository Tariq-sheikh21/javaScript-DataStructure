//Example: Combining Arrays
const arr1 = [0,2,3,5,6,5];

const arr2 = [10,28,3,5,6];

const combinedArr = [...arr1, ...arr2];

console.log(combinedArr);

//Example: Copying an Array

const originalArray = [1,2,3];
const copiedArray = [...originalArray];

console.log(copiedArray);

copiedArray.push(4);
console.log(originalArray);

console.log(copiedArray);


// spread operator over object

//Example: Combining Objects
const obj1 = {name: 'Tariq', age: 27};
const obj2 = {email: 'tariq@gmail.com'};

const combinedObj = {...obj1, ...obj2};

console.log(combinedObj);

//Example: Copying an Object
const originalObj = {name: 'Ali', age: 29}
const copiedObj = {...originalObj};

console.log(copiedObj);

copiedObj.email = 'ali@gmail.com'
console.log(originalObj);

console.log(combinedObj);

//Here's how to copy an object into a completely separate object, using the spread operator.

const car1 = {
    speed: 200,
    color: 'yellow'
};
const car2 = { ...car1 };
car2.speed = 201;

console.log(car1);
console.log(car2);
