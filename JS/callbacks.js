// // setTimeout(()=>{
// //     setTimeout(()=>{
// //         console.log("Nested fn")
// //     }, 2000)
// // }, 2000)

// const fn = (callback) => {
//     setTimeout(()=>{
//         callback([2,3,4])
//     }, 2000)
// }

// const add = (array) => {
//     let sum = 0;
//     for (let i of array) {
//         sum += i
//     }
//     console.log(sum)
// }

// fn(add)
////////////////////////////////////////////////////////
function doubleAfter2Seconds(x){
    return new Promise(resolve => {
        setTimeout(
            () => {
                resolve(x*2)
            }, 2000
        )
    })
}

// doubleAfter2Seconds(200).then(data=>console.log(data))

// let sum = doubleAfter2Seconds(10).then(value=>value) + doubleAfter2Seconds(20).then(value=>value) 
// + doubleAfter2Seconds(30).then(value=>value)

// console.log(sum)



// function addPromise(){
//     return new Promise(resolve => {
//         doubleAfter2Seconds(10).then(a=>{                   //waiting for a promise to resolve
//             doubleAfter2Seconds(20).then(b=>{               //waiting for a promise to resolve
//                 doubleAfter2Seconds(30).then(c=>{           //waiting for a promise to resolve
//                     resolve(a+b+c)
//                 })
//             })
//         })
//     })
// }
// addPromise().then(result=>{
//     console.log(result)
// })


//async await to work with promises
//async code in sync way
async function addAsync(){
    const a = await doubleAfter2Seconds(10)   //waiting for a promise to resolve
    const b = await doubleAfter2Seconds(20)   //waiting for a promise to resolve
    const c = await doubleAfter2Seconds(30)   //waiting for a promise to resolve

    return a+b+c
}

addAsync().then(r=>{
    console.log(r)
})
