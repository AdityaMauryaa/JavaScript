"use strict"; // use to treat all code as newer version of javascript
//alert(3+3).    // we are using node.js so its not useful in browser it will give 6 but here error
// console.log(3+3)    console.log(3+3).  //will give error

console.log(4+4) //valid
console.log('1'+4) ;  //valid.  
let name="Aditya" //string datatype
let age=19 // int datatype

// number=? 2 to power 53
// bigint
// string ""
// boolean true or false 1 or 0
// null standalon value
// undefined not initialised

console.log(typeof(age)) // will give type of age
console.log(typeof undefined)  // undefined is a type itself 
console.log(typeof null)  // null is object datatype
// falsy datatypes -->These are used to be consider as a false values.

 //->false
 // ->null
 // ->undefined
 // ->0
 // -> -0
 // -> NaN(not a number)

let notDefined// even is we dont assign undefined it will be default undefined
console.log(notDefined);

notDefined=undefined;// even is we dont assign undefined it will be default undefined
console.log(notDefined); // prints-> undefined

//doing addition of numbver with undefined will give NaN;
console.log(notDefined+7890); // prints ->NaN

console.log(10>10,"Second thing");
console.log(10);

/// equality operator
//  === strict equality (type + value)
// !=== strict inquality(type +value)
// ==lose quality (value)
// != lose inqeuality (value)
console.log(10!=='10'); // not equality strict
console.log(10==='10'); // strict equality
console.log(10=='10'); // lose equality
console.log(10!='10'); // lose inequality


