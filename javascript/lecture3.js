"use strict";
/*// post & pre operator
let a=1;
let b = a++;//post increment
console.log(b);

b= ++a;//pre increment
console.log(b);

b = a-- //post decrement
console.log(a);

b = --a // pre decrement
console.log(a);

//alert/prompt
// alert("This is alert window!");
const personName = Number(prompt("Enter your name"));
console.log(personName,typeof personName);

//use strict
let a = 1;
console.log(a);

//if else 
let a = 10;
if(a===30){
    console.log("True");
}
else if(a === 30){
    console.log("yes");
}
else if(a <20){
    console.log("hi");
}
else{
    console.log("False");
}

let password = "shivang123";
let reEnter = "shivang123";

if(password===reEnter){
     console.log("Password matched");
}
else {
    console.log("Password doesn't match");
}
if(password===reEnter) console.log("Password matched");

let passworD = prompt("Enter your password");
let reEnterD = prompt("agin enter your password");

if(passworD===reEnterD){
     console.log("Password matched");
}
else {
    console.log("Password doesn't match");
}

// switch statement

let today = prompt("What day is today");

switch(today){
    case "Monday": 
    console.log("today is monday");
    break;
    case "Tuesday": 
    console.log("today is Tuesday");
    break;
    case "Wednesday": 
    console.log("today is Wednesday");
    break;
    case "Thursday": 
    console.log("today is Thursday");
    break;
    case "Friday": 
    console.log("today is Friday");
    break;
    case "Saturday": 
    console.log("today is Saturday");
    break;
    case "Sunday": 
    console.log("today is Sunday");
    break;
    default:
        console.log("Invalid input");
}
//local or global variable
//global variable
let a = 10;
let b= 20;
const c = a + b;
//local variable
{
    let a = 10;//local variable
    var b = 20;//global variabel
    console.log(a);
}
// console.log(a);//local
console.log(b);//global

//loops in js
//for loop
let a = 10;
if (a>10) console.log("true");

for(let i=1; i<=10; i=i+1){
    console.log("hello world");
}

//while loop

let i=1;
while(i <= 5){
    console.log("hello!");
    i = i++;
}
// do while
let i=1;
do{
    console.log(i);
    i=i+1;
} while (i <=5 );
do{
    console.log(i);
    i++;
} while(i<=3);

let i = 1;
while(i<=10){
    console.log(i);
    i++;
}
for(let i=0; i<=2; i++){
    for(let j=0; j<=2; j++){
        for(let k=1; k<=2; k++){
            console.log(k, "Hi");
        }
        console.log(j, "Hello");
    }
    console.log(i, "Hello world!");
    
}
console.log("Finished...");*/

//types of error in js

//boolean values in if else
let validVoter = false;
if(validVoter){
    console.log("true");
}
else{
    console.log("false");
}