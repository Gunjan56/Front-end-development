//advance functions concepts
//closer look at functions
//default parameter

function sayHello(firstName="Gunja",lastName="Gangwar"){
    console.log(`Hello ${firstName} ${lastName} how are you!`);
}
sayHello("gunjan");//lastName 'undefined'//if function called without
//  argument parameter will be undefined
sayHello("Gunjan", "Gangwar");//Gunjan Gangwar //argument will overright default arguments;
sayHello()//default parameter will be print

//Higher Order Function
//1. functions as arguments
//2. returns a function as result
//function returning functions
//function with no argument
function sayHelo(){
    function sayHi(){
        console.log("hello");
    }
    return sayHi;
}
const resulttt = sayHelo();
resulttt();

//with argument
function sayHelloo(firstName){
    function sayHii(lastName){
        console.log(`hello ${firstName} ${lastName}`);
    }
    return sayHii;
}
const res = sayHelloo("gunjan");//firstName
res("gangwar");//lastName coz function return the subfunction as arguments

//function as arguments
function fullName(firstName, greetPlace){
    const greet = greetPlace(firstName);
    console.log(greet);
}
function sayHello(firstName){
    return `hello ${firstName}`;
}
fullName("blame", sayHello);

//firstClass function
 //function can be assigned to variables
 //functions can be passed as arguments to other function
 //function can be returned as values from other functions

//Map filter reduce array method
//Map() method
const arr = [1,2,3,3,4,4,5,6,7,8];
// const resu = arr.map(function(element, index,array){
//     // console.log(index);
//     // console.log(array);
//     return element+4;
// });
// console.log(resu); 
//using arrow function
const re = arr.map((a) => a+1 );
console.log(re);

const ar = [2,3,4,5];
const finalMap = ar.map((a) => a+1);
console.log(finalMap);

//filter method//works over condition
const filterArr = [1,3,4,5,6,6,7,8,9,2];
const finalarr = filterArr.filter(function(element){
    return element % 2 == 0;
});
console.log(finalarr);
//arrow function
const twolines = [1,2,3,4,5,6];
const b = twolines.filter((a) => a % 2 !== 0);
console.log(b);

//reduce method
const arrrr = [1,2,3,4,4,5,6,7];
const resu = arr.reduce((h1,h2) => h1+h2);
console.log(resu);


//imediatly invoked function expression IIfE
//syntax IIFE
//() ();
(function (){
    //body of function
    console.log("you did't call me i am self invoked");
})();
(function (){
    console.log("hello");
}) ();
//IIEF with anonymous function
(function (){
    console.log("hi");
}) ();
//IIFE with arrow function
(() => console.log("you did't call me i am self invoked")) ();

//IIFE with function declaration
(function myFunction(){
    console.log("hello");
}) ();

//callbacks function
function add(a,b){
    return a+b;
}

function minus(a,b){
    return a - b;
}

function calculate(x,y,operation){
    return operation(x,y);
}
const ree = calculate(10,30, add);
console.log(ree);

//closure and lexical scoping
//Lexical Scoping//closures
function outerFunction(){
    const message = "Hello World!";//message variable have only accessble with in the outerfunction //scope of outer function
    const greet = "Hey!";
    function innerFunction(){
        console.log(message);
    }
    return innerFunction;
}

const closure = outerFunction();//closure means inner functions have access thier outer functions variables
closure();

//console.log(message);//can't accessible message varible because it's lexical scoping varible can be accssed within the function











