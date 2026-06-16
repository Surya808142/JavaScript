// IIFE (Immediately Invoked Function Expression)
// A function that is defined and immediately invoked (called) at the same time.
// Reduces the chances of polluting the global scope with variables and functions, as the function is executed immediately and its variables are not accessible outside of it.


// (function user(){
//     console.log("Hi, User");   
// })();

// user()

((name) => {
    console.log(`Hi, user2 ${name}`);
    
})("Surya")