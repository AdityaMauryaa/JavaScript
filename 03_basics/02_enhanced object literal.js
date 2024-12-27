//These literals are the enhancement introduced in EMCASCRIPT6 to enhanced scripts and objects syntax of javascript\
const user=function (name,age,work){
    return {
        name,// even wuthout writing in key value form because of enhanced object literal
        age,
        work:work,
        intro: function(){
            console.log(`my name is ${name} and ${age}`);
        }
    }
}

console.log(user("Aditya",21,"Student"));
user("Aditya ","20","student").intro();
