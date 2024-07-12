// map method in arrays in js
const numbers = [1,2,3,4,5];

const doubleNumbers = numbers.map(number => number * 2)
console.log(doubleNumbers);

const users = [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 25 },
    { name: 'Dave', age: 15 },
    { name: 'Eve', age: 30 }
];

// filter out user who is under 18
const adultUsers = users.filter(user => user.age >= 18)

// Transform the other user a willcome message

const transformedUsers = adultUsers.map(user =>{
    return {
        ...user,
        willcomeMessage: `Wilcome, ${user.name}`
    };
});

// log each transform user using forEach

transformedUsers.forEach(user =>{
    console.log(`Name: ${user.name}, Age: ${user.age}, Message: ${user.willcomeMessage}!`);
})