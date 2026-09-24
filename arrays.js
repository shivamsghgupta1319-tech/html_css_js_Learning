/*let marks =[97,82,74,96,85,96];
console.log(marks);
console.log(marks.length);//property
let heros =["shaktiman","krish","khiladi","ironman","spiderman","hulk","thor"];
console.log(heros);*/



// looping over an array
/*let heros =["shaktiman","krish","khiladi","ironman","spiderman","hulk","thor"];

for (let idx=0; idx<heros.length;idx++) {
    console.log(heros[idx]);
}
//for-of
let heroes =["shaktiman","krish","khiladi","ironman","spiderman","hulk","thor"];

for(let hero  of heroes ){


    console.log(hero);
}


let cities =["delhi","mumbai","up","uk","pune"];

 for(let  city of cities ){
    console.log(city.toUpperCase());
 }  


    // for a given array with marks of students ->[85,97,44,37,76,60]find the avg marks of entire class 

    let marks =[85,97,44,37,76,60];
    let sum=0;

    for(let val of marks){
            console.log(val);
            sum += val;
    }
    let avg = sum/marks.length;
    console.log(`avg marks of the class =${avg} `);


    // For a given array with prices of 5  items =>[250,645,300,900,50,]  All items have an offer of 10% off on them .Change the array to store final price after applying offer 


let items= [250,645,300,900,50,];

let i=0;


for(let val of items){
    console.log(`value at index ${i}  = ${val} `);
    let offer= val/10;
    items[i] =items[i]- offer;
    console.log(`value after  offer=${items[i]}`);
    i++;

}
let items= [250,645,300,900,50,];


for (let i =0; i<items.length; i++){
        let offer= items[i]/10;  
        items[i]-=offer;
console.log(items);
}


// array methods
 let foodItems =["potao","burger","tomato","onion","apple"];
// foodItems.push("chips","lichi","panner");
console.log(foodItems);
 let deletedItem=foodItems.pop();

S
 console.log(foodItems);
 console.log("deleted",deletedItem);


 let foodItems =["potao","burger","tomato","onion","apple"];
 console.log(foodItems);
  console.log(foodItems.toString());
   console.log(foodItems);


// concat method 
   let marvelheros=["thor","hulk","spiderman"];
   let dcheros =["superman","batman"];

  let heros= marvelheros.concat(dcheros);
  console.log(heros)
;    
//add to start (unshift method )
 let marvelheros=["thor","hulk","spiderman"];
   let val =marvelheros.shift();
   console.log ("deleted ",val );


   // slice method .
         let marvelheros=["thor","hulk","spiderman","dr.strange","ironman","antman"];
         console.log(marvelheros);  
    
       console.log(marvelheros.slice(1,2)); 
       console.log(marvelheros.slice(1,3)); 

// saplice method 

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.splice(2,2,101,102 );
// add element 

//arr.splice(2, 0, 101);
// delete element 

arr.splice(3,1);

//replace element 

arr.splice(3,1,101);   */ 








// practice question 


// createw an array to store these companies -> "Bloomberg","Micriosoft","Uber","Google","IBM","Netflix"

let companies =["Bloomberg","Micriosoft","Uber","Google","IBM","Netflix"];
// removing first company from the array 
//companies.shift();  

// remove uber and ola for that place 
//companies.splice(2,1,"ola");   

// add amazon at the end 
companies.push("Amazon");

