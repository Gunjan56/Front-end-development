//extra topics
//return in if else
function checkNumber(num){
    if(num>0){
        return 1;
    }
    else if(num<0){
        return -1;
    }
    else if(num === 0){
        return 0;
    }
}
console.log(checkNumber(10));
console.log(checkNumber(-2));
console.log(checkNumber(0));

//another use of if else
let value = false;
// if(value === true){
//     console.log("value is true");
// }
if(value){
    console.log("value is true");
}
else{
    console.log("value is false");
}

let userLogged = false;
if(userLogged) console.log("user is logged in");
if(!userLogged) console.log("user is not logged in");

//isArray method checks wheather given variable is array or not 
let arr = [2,3,5,6,7,8];//true
let arr1 = "hello";//false
let arr2 = [];//true
let arr3 = [2,3,4,"hello", false];//true
let result = Array.isArray(arr2);
console.log(result);

//isNaN
const randomNumber = 22;//false
const randomNumber2 = "22.34px";//true
let numbr = isNaN(randomNumber2);
console.log(numbr);

//toString & toFixed
let now = new Date();
const result1 = now.toString();
console.log(result1, typeof result1);

const result2 = now.getFullYear().toString();
console.log(result2);

let score = 255.4567;
let fixedScore = score.toFixed();//255
let fixedScore1 = score.toFixed(2)//255.46
console.log(fixedScore1);

//Arrow function doesn't have arguments Object
function randomFunction(a,b){
    // console.log(arguments);//array like object inside every function
    console.log(arguments[0]);//2
}
randomFunction(2,3);

// const randomArray = (a,b) => {
//     console.log(arguments);
// }
// randomArray(2,3);//error in arrow function

//fix arguments in arrow function using rest parameter
const arrFun = (...args) => console.log(args);
arrFun(2,3,4);//2,3,4

//declaring variables shorthand
let x = 20, y = 10, z = 30;
const f = 10, s = 6, q = 0;
// let a = 10, const = 34;//error
let r,t,u = 10;//shorthand

//Nullish coalescing operator(??)
// let valuee = "random value";//noting log in console
// let valueee = null//if log in console
// if(valueee === null || valueee === undefined){
//     console.log("value is either null or undefined");//noting execute
// }

//Nullish coalescing operator
// let valueee = "Hello world!";
let valueee = undefined;
// const resulttt = valueee ?? "is not null or unddfined."//Hello world!
const resulttt = valueee ?? "it is null or undefined!";//it is null or undefined
console.log(resulttt);

//Optional chaining(?.)
const server = {
    serverName: "Google",
    hostCountry: {
        america: "yes",
        russia: "no",
        india: {
            uttarPradesh: "yes"
        }
    },
};

// const resultttt = server.hostCountry.india.uttarPradesh.city;//undefined
const resultttt = server.hostCountry.india?.uttarPradesh.city
console.log(resultttt);
console.log("connecting to db");

//Short Circuit
// let value1 = true;
let value1 = "";//false
// let value2 = false;
let value2 = "string";//string
//truthy || stops as soon as value is true
// let result11 = value1 || value2;//true
let result11 = value2 || value1;//true
console.log(result11);

//And && stops as soon as falsy is encountered
let val1 = true;
let val2 = true;
let re = val2 && val1 && 10<5;//false;
console.log(re);//false

//Enhanced object litrals in es6
const serverName = "server";
//computed property names
const serverInfo = {
    [serverName + " 1"]: "google",
    [serverName + " 2"]: "meta",
};
console.log(serverInfo);

//function shorthand
const serverr = {
    serverName: "blame-server",
    // restartServer: function(){
    //     console.log("Server is restarting");
    // },
    restartServer(){
        console.log("Server is restarting");
    },
};
serverr.restartServer();

//key shorthand
const server1 = "Google";
const server2 = "Firebase";
const server3 = "meta";
const server4 = "twitter";

const serv = {
    // server1: server1,
    // server2: server2,
    // server3: server3,
    // server4: server4,//normal way
    server1,
    server2,
    server3,
    server4,//shorthand//using key shorthand
};
console.log(serv);


