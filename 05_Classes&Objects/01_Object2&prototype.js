//Direct way of creating object
const student={
    something:"XYZ",
    Class:"III",
    printClass:function(){
        console.log(this.Class);
    }
};
// student.printClass();
//Manual Prototype
const employee={
    calcTax(){
        console.log("TAx Rate is 50%_From_employee");
        return null;
    },
};
const something={
    salary:"50000",
    calcTax(){
        console.log("TAx Rate is 50%_From_something");
        return null;
    },
};
something.__proto__=employee;
something.calcTax();

//So basically prototype is a special property in js and its type is reference to an object,
// Either will be null or Refrence to an object

