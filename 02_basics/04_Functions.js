// A function is a block of code taht performs a specific task
// function makes the code reusable.You can declare it once and use it multiple times
//FUnction makes program easier
//it increases readability
// declaration->  
            // function name(paramter/value){...logic inside it...}

function greet(){
    console.log("Initialized a function");
    console.log("function is called");
}
greet(); // fcuntion call, excetution or run

// paramter based function
function solve(name){
    console.log("Initialized a function");
    console.log(`function is called and parameter values ${name}`);
}
solve("Aditya"); 

// return in function
// return -> function
function add(x,y){

    console.log(x+y);
    return (x+y)%3;
}
const x=add(10,90);
console.log(x);

function myFun(x,y){
    return x*y;
}
const a=myFun(10,20)
const b=myFun(110,200)
console.log(a,b)

//function declaration
// in fun declaration function can be access above function also

sayHello('Bhaiii02')
function sayHello(username){
    console.log(`Hello ${username}`)
}

// function expression
// in expression function should be access adfter inintialization cannot be access before initialization if we acceces
// greeting here will give error

const greetings = function(user){
    console.log(`hello ${user}`);
} 
// here as function is initialized now greetings call be be valid
greetings('Aditya')


//...............Call Back Function.......
// when function is passed as an argument t=that call is calleed fuc=nction callback
// lets say 
        function showCAllFunc(greeting){
            const value=10;
            greeting(value)
        }
        showCAllFunc(function (value){
            console.log(value);
        }
    )