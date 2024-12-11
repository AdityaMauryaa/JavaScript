// for variable-> (reserved variable) (variable name) (type of value)
// let /const/ var(not used enough) can be used

let accountEmail; // declaring variable
console.log(accountEmail); // assigning value to variable

 accountEmail="aditya@google.com"
const accountId =144553 // assigned as const so wont be able to change in further
var accountPassword="Aditya"
let accout;//undefined 

accoutnAddress="UP"// Not a good practice without any initializer consf val let....
// accountId=2 // Not allowed as already initialised as constant

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountEmail,accountId,accountPassword,accoutnAddress,accout])

