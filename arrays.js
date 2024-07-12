//Firt Type of data Structure is arrays 
const fruits = ['Banana', 'Mango', 'Apple', 'Orange']
console.log(fruits);

//Access elements
console.log(fruits[1]);

// Add elements
fruits.push('date');
console.log(fruits);

// Remove elements
fruits.pop();
console.log(fruits);

//Add elements on index 1
fruits.splice(1,1,'cheery');
console.log(fruits);

//Remove elements from index 1
fruits.splice(1,1);
console.log(fruits);


const grades = [75,95,90,85,80,85];
let gradesSum = 0;

for(i = 0; i < grades.length; i++){
    gradesSum += grades[i]
}

console.log(gradesSum / grades.length);

const fruitss = ['kiwi', 'mango', 'apple', 'banana'];

fruitss.forEach((fruit, index) =>{
    console.log(`${index}. ${fruit}`);
}) 