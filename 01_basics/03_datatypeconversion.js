
console.log("---------CONVERSION TO NUMBER____________*********")


console.log("")
console.log("---------For number")
console.log("")

let score =33
console.log(typeof(score))
console.log(typeof score) // another way of writing outside paranthesis

console.log("")
console.log("----------For string")
console.log("")
let scor="33" //string stored

console.log(typeof scor)

let valueInNumber=Number(scor)
console.log(typeof(valueInNumber))
console.log((valueInNumber))

console.log("")
console.log("-------------For mixed string and number")
console.log("")
let valueNum="223acdd"
valueNum=Number(valueNum)
console.log(typeof(valueNum))
console.log((valueNum)) // give NaN because converted to number but initialy it was 223acdd when converted to number acdd was also there


console.log("")
console.log("-------------For Null")
console.log("")

let valueNumNull=null
valueNumNull=Number(valueNumNull)
console.log(typeof(valueNumNull))
console.log((valueNumNull)) // for null it returns zero when converting to number

console.log("")
console.log("-------------For Undefined")
console.log("")

let valueNumUndefined=null
valueNumUndefined=Number(valueNumUndefined)
console.log(typeof(valueNumUndefined))
console.log((valueNumUndefined)) // for undefined it returns zero when converting to number


//---------summary---------//
/*
"33"=>33
"33abd"=> NaN
null=>0
undefined=>0
true=>1 and false=>0
*/


console.log("")
console.log("--------------CONVERSION TO STRING----------******")
console.log("")

let num=33
num=String(num)
console.log(num)
console.log(typeof num)