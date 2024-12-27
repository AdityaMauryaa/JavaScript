// array destructuring
const foo=["one","second","third"]
const [one]=foo;
console.log(one);
const [second]=foo;
console.log(second);
const [third]=foo;
console.log(third);

// object destructuring
const person={
    ky:"value",
    Name:"Aditya",
    10:"knsnksnx",
}
const {key ,Name,"10":num}=person
console.log(key,Name,num);