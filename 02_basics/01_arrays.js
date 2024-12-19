// ++++++++++++++++++++++++++ ARRAY  +++++++++++++++++++++++++===


const myArray=[2,4,56,3,5,8,9,5,5,8,0,"dfghjk"] // in javascript array can store myltiple types of datatypes

const myNames=["Aditya ","MAurya","NandKishore","Nakul","Pratap","Maurya"];
console.log(myArray.length) // function to get lentgh
console.log(myArray.at(4)) // function to get indedx
console.log(myArray[4]) // function to get vale at index

// ARRAY METHODS

myArray.push(45)
console.log(myArray)
// console.log(typeof myArray) // types will be object

myArray.push(567);
console.log(myArray)
myArray.pop();
console.log(myArray)


myArray.unshift(9) // this will insert the value in first index
console.log(myArray)
myArray.shift() // this will remove the value in first index
console.log(myArray)

console.log(myArray.includes(9)) // will result in boolean dataype whether the number exist or not
const newArr=myArray.join() // join will make all elements from array to string

console.log(newArr)
console.log(typeof newArr)
console.log("A",myArray)
console.log(myArray.slice(2,6)) // print from 2 to 5th index element leaving 6th index
console.log("C" ,myArray)
console.log("B" ,myArray)
console.log(myArray.splice(2,6)) // print tille ranged and remove that range from orginal array
console.log("C" ,myArray)
