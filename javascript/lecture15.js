//javascript debuggers
// debugging is the process of testing,finding, and reducing bugs in computer programs
//fixing error in the code is called debugging
//error in js
// const settwo = 10;
// try{
//     console.log(setTwo);//ReferenceError
// }
// catch(err){
//     console.log("This is a error");
// }
// finally{
//     console.log("continue with your next code......");
// }

// //fix bug 
// //1. console.log
// // const a = "10";//error
// const a = 10;
// const b = 20;
// const result = a + b;
// console.log(result, typeof result);

// //2. Browser debugger(breakpoints)
// let c = 10;
// let d = 2;

// for(let i = 1; i<= 10; i++){
//     console.log(i);
// }
// function add(c,d){
//     return c + d;
// }
// const resultt = add(50, 60);
// console.log(resultt);
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");

//Modules , type="module" in script file
//import, export
//import another.js
// import { greet } from "./another.js";
// import {str} from "./another.js";
// import {greet, str as string} from "./another.js";
// greet();
// const str = "helloo";//error
// console.log(str);//as keyword
// console.log(string);

//import all
// import * as myObj from "./another.js";
// myObj.greet();
// console.log(myObj.str);

//using exportdefault
//export default can be given to only one
//with the export default syntax, you can only export one value as
//the default export from a module.
// import reel from "./second.js";
// console.log(reel);

//Regular Expression or Regex//validate text, search through out the text
// const story = `Zero is a number which quantifies a count or an amount of null size. 
// In most cultures, 0 was identified before the idea of negative things (i.e., quantities 
// less than zero) was accepted. As a value or a number, zero is not 
// the same as the digit zero, used in numeral systems with positional notation.`;
//change only first expression
// const result = story.replace("a", "an");
// console.log(result);

//using regex
// const regex = /a/g;//search pattern
// const result = story.replace(regex, "an");//replace with your text
// console.log(result);

//Symbol //unique identifier
const a = Symbol("gg");
console.log(a);
const b = Symbol("gg");
console.log(b, typeof b);
//every symbol is unique
console.log(a === b);

//only use symbol in object
const s2 = Symbol("gg")
const s3 = Symbol("gg");
const person = {
    fullName: "blame",
    // s2: "symbol inside object",//can't access symbol value for s2
    [s2]: "symbol inside object",
    [s3]: "symbol inside object"//generate unique identifiers
};
console.log(person);

//wrong way
console.log(person.s2);

//right way
console.log(person[s2]);




