const score=400

const balance =new Number(100)
console.log(score)
console.log(balance)
const x=toString(balance) // as balance what object but converted to string

console.log(typeof balance)
console.log(typeof score)
console.log(typeof balance)
const bal =new Number(102321.9899)
console.log(bal.toPrecision(5)) // gives calculation to precision till writtten value


// ++++++++++++++++++++++++++++++++   MATHS   ++++++++++++++++++++++++++++++++ //
console.log("// ++++++++++++++++++++++++++++++++   MATHS   ++++++++++++++++++++++++++++++++ //");
console.log(Math);
console.log(Math.abs(-4)) // gives absolute value meand negative to positive and positive remains same
console.log(Math.floor(40.343))
console.log(Math.ceil(40.343))

console.log(Math.max(4,3,2,5,6,3,1,5)) // gives Math.max gives max value of list
console.log(Math.min(4,3,2,5,6,3,1,5)) //gives Math.min gives min value of list

       /// +++++++++++++++++++++  RANDOM FUNCTION   +++++++++++++++++++++. ///
console.log(Math.random)
console.log(Math.random()*100)

const min=10
const max=3000

console.log(Math.floor(Math.random()*(max-min+1))+min)