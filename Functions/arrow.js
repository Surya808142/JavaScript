// this refers to current context in code 
// If you are run this keyword inside a function then it return different output 
// If you are in node environment instead of browser , this remeins empty object

const user = {
    name : "Surya",
    gmail : "surya@google.com",

    welcomemsg : function(){
        console.log(`${this.name} , welcome in JS`)
        // console.log(this);
        
    } 
}

// user.welcomemsg()


// ****************** Declaration *******************

/*  function functionname(){
    
    }   

    functionname()
*/

function random(){
    console.log(this)
}

// random()

// ****************** Arrow Function *******************

// Arrow function does not have its own this keyword, it inherits this from the parent scope where it is defined. 
// In arrow function, this refers to the surrounding context (the value of this in the enclosing scope) at the time the function is defined, not when it is called.

// const addnum = (num1, num2) => {
//     return num1+num2
// }

// another method 

const addnum = (num1, num2) => (num1 + num2)
console.log(addnum(3, 5))

// if you return an object using => then the syntax is () => ({}) 

const username = () => ({name : "Surya"})
console.log(username);
