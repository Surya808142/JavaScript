// for in Loop is used to iterate over the properties of an object. It is not recommended to use for in loop for arrays as it iterates over all enumerable properties, including inherited ones.

// const obj = {
//     "js" : "javascript",
//     "cpp" : "C++",
//     "py" : "python"
// }

// for (const key in obj) {
//     console.log(`${key} is the shortcut of ${obj[key]}`);
    
// }


// for each Loop

// const arr = [
//     {
//         language : "javascript",
//         inshort : "js"
//     },
//     {
//         language : "java",
//         inshort : "java"
//     },
//     {
//         language : "python",
//         inshort : "py"
//     }
// ]

// arr.forEach((lng) => {
//     console.log(`${lng.inshort} representing ${lng.language}`);
    
// })

const myarr = [1, 2, 3, 4, 5, 6, 7, 8]

const newArr = myarr.filter((item) => {
    return item > 2
})

console.log(newArr);

// Reduce method is used to reduce an array to a single value by applying a function to each element of the array and accumulating the result. It takes a callback function and an optional initial value as arguments.

// const sum = myarr.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// }, 0)

// console.log(sum);

