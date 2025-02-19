//error handling using try-catch
let a=1;
let b=2;
console.log(a+b);
console.log(a*b);
console.log(a-b);
try{
    console.log(a+c);
    
    //....normal code
}
catch(err){
    //handle the error
    // console.log(err);
   
}
console.log(`a+b ${a+b}`);