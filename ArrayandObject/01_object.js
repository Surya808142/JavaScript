// Symbol is accessed by [] without [] not considered as a symbol


const mySymbol = Symbol("key1")

const user1 = {
    name : "Surya",
    age : 18,
    email : "surya@gmail.com",
    address : "Balrampur",
    [mySymbol] : "mykey1"
}

// console.log(user1.email);
// console.log(user1["email"]);
// console.log(user1[mySymbol]);

// console.log(user1);

user1.email = "surya@yahoo.com"

// if you need to freeze any object properties simple user freeze ->  Object.freeze(objectname)


// Object.freeze(user1)
// user1.email = "surya@bing.com"

console.log(user1.email)

user1.greeting = function(){
    console.log("Hello User1");
}

user1.greetingTwo = function(){
    console.log(`Hello User1, ${this.name}`);
}


console.log(user1.greeting());
console.log(user1.greetingTwo());


