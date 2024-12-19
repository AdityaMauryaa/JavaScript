// OBJECTS -> allows us to store collection of data along with label....using key value pair...
const person={
    key:"value",
    Name:"Aditya",
    10:"knsnksnx",
}
console.log(person)
//accessing key values;
// console.log(person.10)// not valid as 10 as key is number
console.log(person["10"]);// this is valid

console.log(person.key);// here this is valid as key is not a number
console.log(person["key"]);// here this is valid as key is not a number

// Dot notation is valid is key is a string but bracket notation is valid in bioth condition


// Methods of objects;
//Deletion
delete person.key // will delete the key as a key 
console.log(person)
