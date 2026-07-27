// First Method
// const promiseOne = new Promise((resolve, reject)=> {
//     setTimeout(function(){
//         console.log("Asyc task completed");
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })


// Second Method
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("2nd Async task completed");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Again Promise consumed");
// })


// Third Method
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username :"Surya",email:"srj@gmail.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })


// Fourth Method
// const promiseeFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username:"srj", password: "123"})
//         }else{
//             reject("ERROR: something went wrong..")
//         }
//     }, 1000)
// })

// promiseeFour.then(function(user){
//     console.log(user);
//     return user.username

// }).then(function(username){
//     console.log(username);
// }).catch(function(error){
//     console.log(error)
// }).finally(()=>{
//     console.log("Promise has beed resolve or rejected");
// })


// Fifth Method (using async function)
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ course: "Javascript", code: "123" })
        } else {
            reject("ERROR: Js went wrong")
        }
    }, 1000)
})

async function promiseConsumed() {
    try {
        const response = await promiseConsumed
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

promiseConsumed()


