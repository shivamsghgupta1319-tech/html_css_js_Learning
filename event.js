/*let btn1= document.querySelector("#btn1");   
btn1.onclick = ()=>{
    console.log("btn1 was clicked ");
    let a=25;
    a++;
    console.log(a);
}
let div = document.querySelector("div");
div.onmouseover = ()=>{
    console.log("you are inside div");

} 

// event object 
let btn1= document.querySelector("#btn1");   
btn1.onclick = (evt)=>{
    console.log(evt.type);
    console.log(evt.target);
console.log(evt);
console.log(evt.clientX,evt.clientY);
}
let div = document.querySelector("div");
div.onmouseover = (evt)=>{
   
    console.log(evt.type);
    console.log(evt.target);
console.log(evt);
console.log(evt.clientX,evt.clientY);

} 

//event listner 

let btn=document.querySelector("#btn1");

btn1.addEventListener("click",(evt)=>{
console.log("button 1 was clicked");
console.log(evt);
console.log(evt.type);
})
btn1.addEventListener("click",()=>{
console.log("button 1 was clicked-handeler2");
})




let btn1=document.querySelector("#btn1");
btn1.addEventListener("click",(evt)=>{
console.log("button 1 was clicked-handler1");
})
btn1.addEventListener("click",()=>{
console.log("button 1 was clicked-handler2");
})

const handeler3=()=>{
console.log("button 1 was clicked-handler3");
}


btn1.addEventListener("click",()=>{
console.log("button 1 was clicked-handler4");
})

btn1.removeEventListener("click",handler3);*/


//ques create a toggle button that chnages the  screen to dark -mode    when clicked &light mode when clicked again 

let modeBtn=  document.querySelector("#mode");

let body= document.querySelector("body");

let currMode="light";// dark 

modeBtn.addEventListener("click",()=>{
    //console.log( "you are trying tom change  mode");
    if(currMode==="light"){
        currMode="dark";
            body.classList.add("dark");
            body.classList.remove("light");
    }else{
        currMode="light";
 body.classList.add("light"); 
 body.classList.add("dark");  
    }
    console.log(currMode);

}); 