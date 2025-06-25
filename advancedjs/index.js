// console.log("Hot water")

// setTimeout(() => {
//     console.log("hot water")
// }, 100);


// setTimeout(() => {
// console.log("Shirt ironing")
// }, 2000);

// console.log("Have to cook")


//promise


const value = false;
function check() {

    return new Promise((resolve, reject) => {
        if (value) {
            resolve("value is true")
        } else {
            reject("value is false")
        }
    })
}


// console.log(check())


// check().then((message)=> console.log(message)).catch((error)=> console.log(error))


async function getResults() {
    try {
        let result = await check()
        console.log(result)
    } catch (error) {
        console.log(error)
        
    }finally{
        console.log("function is finished")
    }
}

getResults()