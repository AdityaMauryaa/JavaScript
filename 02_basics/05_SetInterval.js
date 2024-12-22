//SetInterval:- Used to repeat a code after specified intervals..

const interValid=setInterval(() => {
    console.log(`this will be executed after 3 seconds`);
}, 3000);

//Stopping the function after interval

setTimeout(function(){
    clearInterval(interValid);
    console.log(`this will be stopped after 13 seconds`);
    
},13000);
