// creating object in js
const user = {
    name: 'Ali',
    age: 20,
    email: 'ali@gmail.com'
}

console.log(user);

//Access Properties
console.log(user.email);

// Add properties
user.phone = '0302-3393422';
console.log(user);

//Delete Properties
delete user.email;
console.log(user);