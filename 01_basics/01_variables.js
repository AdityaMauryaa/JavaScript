// for variable-> (reserved variable) (variable name) (type of value)
// let /const/ var(not used enough) can be used


// var :-
        //Scope:
            //. var is function-scoped, meaning it is accessible anywhere within the function
            //  in which it is declared. 
            // If declared outside of a function, 
            // it becomes globally scoped.
            //you can re-declare a var variable within,
            //  the same scope without error.
// Let:-
        // Scope:
            //let is block-scoped, 
            // meaning it is only accessible within,
            // the block {} in which it is declared.
            //You cannot re-declare a let variable in the same scope.

// const
         // Scope:
         // Like let, const is block-scoped.
         // Hoisting:
         // const variables are also hoisted but not initialized.
         // Accessing them before declaration results in a ReferenceError.
         // A const variable cannot be reassigned once it is defined.
        // Mutability:
            //If the const variable holds an object or array,
            // its properties or elements can still be changed.
            // Example:
                // javascript
                // Copy code
                // const obj = { key: 'value' };
                // obj.key = 'newValue'; // No error
                // console.log(obj.key); // 'newValue'

// When to Use What
// Use {const} by default for values that shouldn't change.
// Use {let} for variables that will be reassigned or are scoped to a specific block.
// Avoid {var}, as its function scope and hoisting can lead to bugs.
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

