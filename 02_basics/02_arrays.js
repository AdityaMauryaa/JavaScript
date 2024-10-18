const heroes=["shaktiman","krish"]
const newh=["sds","sdfs"]

heroes.push(newh) // will push array to end of array
console.log(typeof heroes)

heroes.pop()
const newhhj=heroes.concat(newh) // this concat willl merge all elements in one array
console.log(newhhj)

console.log(Array.from("ADITYA")) // will convert anydatatype to array
let a1=400
let a2=700
let a3=100
let a4=300

console.log(Array.of(a1,a2,a3,a4)) // will give merged array of individual numbers