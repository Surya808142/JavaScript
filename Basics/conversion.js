let num = "33abc"

// if num = "33abc" the output is NaN (for conversion)

console.log(typeof num)

let value = Number(num)

console.log(typeof value)
console.log(value);

// ===  ->  strict equality operator (compares both value and Datatype)
// ==   ->  loose equality operator (compares only value, performs type coercion if necessary)