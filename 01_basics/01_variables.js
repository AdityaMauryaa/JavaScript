// for variable-> (reserved variable) (variable name) (type of value)
// let /const/ var can be used
const accountId =144553 // assigned as const so wont be able to change in further
let accountEmail="aditya@google.com"
var accountPassword="Aditay"
let accout;//undefined 
accoutnAddress="UP"// Not a good practice without any initializer consf val let....
// accountId=2 // Not allowed as already initialised as constant

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountEmail,accountId,accountPassword,accoutnAddress,accout])

