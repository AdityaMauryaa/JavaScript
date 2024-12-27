// var lib={
//     sum:(a,b)=> a+b
//     ,
//     mult:(a,b)=> a*b
    
// }
// console.log(lib.sum(2,3))
// console.log(lib.mult(2,3))
 const user=function(a,b,c,d,e){
    console.log("a:",a);
    console.log("b:",b);
    console.log("c:",c);
    console.log("d:",d);
    console.log("e:",e);
    
 }
 const an=["dfhg","fghgjh",1,"fgjhj","hkwe","ehk"]
 const ano=["dfhg","fghgjh",1]
// user(...an)
const concat=[...an,...ano]
console.log(concat);
