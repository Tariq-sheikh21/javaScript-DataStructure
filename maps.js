// Maps in js
let map = new Map()

map.set('name', 'Tariq');
map.set('age', 26);
map.set('email', 'tariq@gmail.com')
map.set(1223, 'testing')
console.log(map);
// Access values
console.log(map.get('email'));

// Check existence of a key
console.log(map.has('age'));

// Remove values
map.delete('name');
console.log(map);