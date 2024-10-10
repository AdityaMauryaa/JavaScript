const name="Aditya"  //string dataType
const repo="Javascrript"
console.log(`Hello my name is ${name} and we are working in ${repo} Repo`)// its a modern way of printing anytime

const game=new String("NewGAme") // object dataType initialised having indexing from 0->(size-1)
console.log(typeof game) //give object
console.log(game[4]) //strings objects element of type string
console.log(typeof name) //give string
console.log(name[2]) //accesing strings element


//string function
console.log(game.length) //getting length
console.log(name.length) //getting length

console.log(game.toUpperCase()) // converting to upper case
console.log(name.toUpperCase())
console.log(name.toLowerCase()) // converting to lowercase
console.log(game)
console.log(name)
console.log(name.charAt(2))
console.log(game[789]) // will give undefined as no element at index 789
const newgame=game.slice(0,45)
console.log(newgame)
const anothergame=game.substring(0,3)
//diffenve between substringh and slice is that slice can start with negative index
const anothernamagame=game.slice(-10,4)
console.log(anothernamagame)

let newn="         Aditya       "
console.log(newn)
console.log(newn.trim()) // this trim function removes starting and ending spaces

const url="https://zanytrout-wwrjqqq-p-wqrhvv0-w.github.dev/"
console.log(typeof url.split('-'))

console.log(url.replace('-','#'))// will replace first one with second one