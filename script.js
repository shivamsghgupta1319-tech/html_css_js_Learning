 // classes in object  
 /*const student={
    fullname:"shiv kumar ",
    marks:94.4,
    printMarks: function(){
        console.log("marks=",this.marks);//  this.marks means {student.marks}

    },
};
*/

/*const  employee={
    calcTax1(){
        console.log("tax rate is 10%");
    },
/*calcTax2: function  (){
     console.log("tax rate is 10%");
}
  

};*/

/*const karanArjun1={
    salary:50000,
};
const karanArjun2={
    salary:50000,
};
const karanArjun3={
    salary:50000,
};
const karanArjun4={
    salary:50000,
};

// proto type properties




karanArjun.__proto__  = employee;
karanArjun2.__proto__  = employee;
karanArjun3.__proto__  = employee;
karanArjun4.__proto__  = employee;
*/





/*class ToyotaCar {
    constructor(brand){
        console.log("creating new object ");
        this.brand=  brand;
        this.mileage=this.mileage;
    }
    start(){
        console.log("start");

    }
    
stop(){
        console.log("stop");
        
        
        }
       // setBrand(brand){
         //   this.brand=brand;   
        // }

        
    }
    

let Fortuner  = new ToyotaCar("Fortuner ,10");  // constructor 
//Fortuner.setBrand("Fortuner");
console.log(Fortuner);
let BMW  = new ToyotaCar("BMW,12");
//BMW.setBrand("BMW");  //constructor
 console.log(BMW);*/


 // Inheritance in JS 


 /*class parent{
    hello(){
        console.log("hello");

    }

 }
 class  Child extends Parent {}

 let obj = new Child();*/


 class Person {
    constructor(name){
            //console.log("enter   parent constructor");
        this.species="homo sapiens";
        this.name=name;
    }
    eat (){
    console.log("eat");

   }
    sleep(){
        console.log ("sleep");
    }
    work(){
       // console.log("no work");
    }
 }
 class Engineer extends Person {
    constructor(branch){
        console.log("enter child constructor");
        super(name);//  to take  parent class constructor   

        this.branch= branch;
            //console.log("exit    child constructor");

    }
work(){
    super.eat();
    console.log("solve problems , build something");

/*class Doctor extends Person {
    work(){
        console.log("help patient, save their life");
    }
}*/

}


}

let eng0obj= new Engineer();

 