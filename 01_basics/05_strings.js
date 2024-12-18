// const name="Aditya"  //string dataType can use single qoute '' also "" also ``

// const repo="Javascrript"
// console.log(`Hello my name is ${name} and we are working in ${repo} Repo`)// its a modern way of printing anytime

// const game=new String("NewGAme") // object dataType initialised having indexing from 0->(size-1)
// console.log(typeof game) //give object
// console.log(game[4]) //strings objects element of type string
// console.log(typeof name) //give string
// console.log(name[2]) //accesing strings element


// //string function
// console.log(game.length) //getting length
// console.log(name.length) //getting length

// console.log(game.toUpperCase()) // converting to upper case
// console.log(name.toUpperCase())
// console.log(name.toLowerCase()) // converting to lowercase
// console.log(game)
// console.log(name)
// console.log(name.charAt(2))
// console.log(game[789]) // will give undefined as no element at index 789
// const newgame=game.slice(0,45)
// console.log(newgame)
// const anothergame=game.substring(0,3)
// //diffenve between substringh and slice is that slice can start with negative index
// const anothernamagame=game.slice(-10,4)
// console.log(anothernamagame)

// let newn="         Aditya       "
// console.log(newn)
// console.log(newn.trim()) // this trim function removes starting and ending spaces

// const url="https://zanytrout-wwrjqqq-p-wqrhvv0-w.github.dev/"
// console.log(typeof url.split('-'))

// console.log(url.replace('-','#'))// will replace first one with second one
   

// Practice further

let firstName="Aditya";
let secondName="Maurya";

let fullName=firstName+secondName; 



//1. concatenation

fullName="";
 fullName=firstName.concat(secondName);
console.log(fullName);



// 2.append

firstName+=" something else";
console.log(firstName);



//3.lentgh
console.log(firstName.length);



//4/cases

console.log(firstName.toUpperCase()); // prints upper case of everything
console.log(firstName); // prints original
console.log(firstName.toLowerCase()); // prints lower case of everything




//5.slices

console.log(firstName.slice(0,4));
console.log(firstName.slice(1,8));
console.log(firstName.slice(1,4));



// 6/ split & join

console.log(firstName.split('')); // will return array of character of strings
console.log(firstName.split(""));// will return array of character of strings
console.log(firstName.split(" "));// will return array of strings separtaed by " " of strings;
console.log(firstName.split(" ").join("______"));// will return string separtaed by "---" instead of " " of strings;



// 7. Includes --> will checks whether element is there or  not

 console.log(firstName.includes(" "));

 // 8. Trim -> remove leading and ending spaces
  let name="            iuhewihkhkwnehn             ";
  console.log(name.trim()); // removes leading and ending spaces


  // Using backticks 
  let disc=`This is just and example of multiline string
using double quotes usnig spaces and tabs shift 
which is just not possible so isntead od double quotes we use backticks`
 console.log(disc);
 
 // 8. Log your message
 let newName="Aditya";
 let newlName ="Maurya";
 let full_name=`${newName} ${newlName};`// will act as kind of template
 console.log(full_name);
 let message=`A text message just for practice using ${newName.toUpperCase()}`;
 message+=`added a new sentence`;
 console.log(message);

 