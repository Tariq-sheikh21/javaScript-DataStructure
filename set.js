// Sets in js
let set = new Set();

set.add(1)
set.add(2)
set.add(2)
set.add(3)

console.log(set);

// Check size
console.log(set.size);

// Check existence of a value
console.log(set.has(2));


// Remove a value
set.delete(2);
console.log(set);