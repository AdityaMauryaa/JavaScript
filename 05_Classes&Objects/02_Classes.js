class car{
    constructor(brand){
        console.log("Manua construction is Done")
        this.brand=brand
    }
    start(){
        console.log("start the Car");
        return 0;
    }
    stop(){
        console.log("Stop the car");
    }
   
}

//Inheritance:-Passing down of properties from parent to child class...by inheriting the properties of parents
class person{
    constructor(){
        console.log("Enter Parents constructor")
        this.species="homoSapiens"
    }
    eat(){
        console.log("person will eat");
    }
    sleep(){
        console.log("person will sleep");
    }
}
class engineer extends person{
    work(){
        console.log("Engineer will do work");
    }
}
// let obj=new engineer();

//super keyword: used to call the parents constructor to access its property will be used in next doctor inherited class;
class doctor extends person{
    constructor(fieldOfstudy){// to call this constructor first need to call parents constructor
        console.log("Enter child constructor")
        super();//to invoke parents constructor
        this.fieldOfstudy=fieldOfstudy;
        console.log("Exit child constructor")

    }
    work(){
        console.log("doctor have to do work for society");
    }
}

let doct=new doctor("Radiologist");


