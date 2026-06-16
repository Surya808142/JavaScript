const groupA = ['John', 'Jane', 'Jack'];
const groupB = ['Alice', 'Bob', 'Charlie'];

// groupA.push(groupB)
// console.log(groupA);

// const groupC=groupA.concat(groupB)
// console.log(groupC);

// ... -> Spread Operator

// const groupC = [...groupA, ...groupB]
// console.log(groupC);

// if we have an array in the array then we use flat() to all element exist in a single array
// Suppose

// const arr = [1, 2, 3, [4, 5, 6], [5, 6, [3, 1]]]

// console.log(arr.flat(1));   // also use infinity in flat if you have no idea of depth of tha array


// console.log(typeof Array.isArray("Surya"));
// console.log(typeof Array.from("Surya"));
// console.log(typeof Array.from({name : "Surya"}));

let s1 = 100
let s2 = 200
let s3 = 300

console.log("The element in the array from is : ", Array.of(s1, s2, s3));

