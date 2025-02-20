//Async Await-> promis chains-> Callbackhell
//Async wait we use for asynchronous Js
//Sync in js means to do something in synchronous way is sequence..means nexxt will work only if prev is done...
//example

// console.log("1")
// console.log("2")
// console.log("3")
// console.log("4")
// console.log("5")

//Above will print the query in synchronous way....
//Asynchronous...Allows code to execute immediately without waiting for prev instruction to be done....
/*
1--
2---
example if 3--takes to much time then it can be done asynchronouys way means will be working paralleing and other instructions will be working as this will be done it will show it output
4--
5--
these will be working without waiting for asyn one...
*/

// setTimeout(()=>{
//     console.log("jbedwjbjb");
// },4000);
// console.log("1")
// console.log("2")
// console.log("3")
// console.log("4")
// console.log("5")

//callback function-a function argument to another function;
function sum(a,b){
console.log(a+b);
}
function calculator(a,b,sumCallBack){
    sumCallBack(a,b);
}
calculator(4,5,(a,b)=>{
    console.log(a+b)
});


//callback hell-nested callbacks creating one another one