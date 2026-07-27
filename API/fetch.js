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
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

promiseConsumed()


// async function getAllusers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }

// getAllusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response
}).then(function(data){
    console.log(data);
}).catch((error) => console.log(error))