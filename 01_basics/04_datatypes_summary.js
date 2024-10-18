// Primitive datatypes
/*
Types : String ,Number, Boolean ,null ,undefined ,Symbol ,bigint
*/


// -------------------------------------------------------------------------------------------------------------//


// Refrence Type DataType (Non-Primitive)

/*
Array,Objects,Funtions // for these non primitive datatypes are type of objects

const heroes=["BHeem","Shaktiman","Krish"]

let myobj={
    Name:"Aditya",
    Age:19
    
}

const myfunction=function(){ //function created as a object
console.log("function created as a datatype")
}

console.log(typeof myfunction);

*/


// -------------------------------------------------------------------------------------------------------------//


// summary


/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object*/



//+++++++++++++*****************STACK AND HEAP*******************++++++++++++++++//

       let nameNew="AdityaMaurya"
       let anotherNAme=nameNew
console.log(anotherNAme)
anotherNAme="Aditya"
console.log(anotherNAme)
console.log(nameNew)

let userOne={                    //userOne is stored in stack and obj stored in heap
       email:"aditya@google.com",
       upi : "user@ybl"
}
let userTwo=userOne;
/*here userOne is a variable stored in stack and equals to object type datatyp
e which gives reference so any changes made will result changes in object itself*/
userTwo.email="adityaaaaa@google.com"
console.log(userOne.email)
console.log(userTwo.email)
