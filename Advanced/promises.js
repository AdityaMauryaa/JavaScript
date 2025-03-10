// const promiseOne=new Promise(function(resolve,reject){
//     //Can do any async task
//     //DB calls and something
//     setTimeout(()=>{
//         console.log("AsyncTask is completed");
//         resolve()
//     },8000);
// })

// promiseOne.then(function(){
//     console.log("Promised consumed")
// })

// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("AsyncResolved");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("PromisedResolvd")
// })
// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve({username:'js'})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })



function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`GetdataExecuted->${dataId}`)
            resolve("Success");
        },3000);
    })
}
async function getAll(){
    await getData("data");
    console.log("Insie aysnc");
}

console.log("Outside aysnc");