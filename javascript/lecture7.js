//string and string method//primitive data types
/*const str = "i am string";
const str1 = ' i am string';
const str2 = `i am string`;

//adding two strings using +
console.log(str + " " + str1 + " " + str2);
//"" empty string

//string also behave like array //index of any string
const str3 = "blame";
const str4 = "Gamer";
console.log(str3[0]);
console.log(str4[3]);
//length of string
console.log(str3.length);
console.log(str3.length-1);
//compare two strings
console.log(str3 === str4);

//string methods
const fullName1 = "Gunjan Gangwar";
const firstName = "Gunjan";
//lowercase,uppercase
console.log(firstName.toLocaleLowerCase());
console.log(fullName1.toUpperCase());
//concat
console.log(firstName.concat(fullName1));
//slice//within index value represtation
console.log(fullName1.slice(0,6));
//split/divide string
console.log(firstName.split(" "));
//trim
console.log(fullName1.trim());
//indexof
console.log(fullName1.indexOf("j"));
//includes/ index of substring
console.log(fullName1.includes("a"));


//Math object
console.log(Math.PI);
console.log(Math.E);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.SQRT1_2);
console.log(Math.LOG2E);
console.log(Math.SQRT2);

//Math object methods
//round /nearest value
console.log(Math.round(2.5));3
console.log(Math.round(9.99));//10
console.log(Math.ceil(6.01));//7
console.log(Math.floor(3.99));//3
console.log(Math.round(3.50));//4
console.log(Math.round(5.49));//5
//ceil return nearest integer
console.log(Math.ceil(2.1));//3
console.log(Math.ceil(2.99));//3
//floor /return rounded upto its nearest integer
console.log(Math.floor(2.99));//2

//trunc/returns integer parts
console.log(Math.trunc(3.5));//3
console.log(Math.trunc(9.99));

//abs /returns the absolute (positive) value
console.log(Math.abs(-45.78));//45.78

//sign// 1 if the no is positive -1 if no is negative,0
console.log(Math.sign(-4));//-1
console.log(Math.sign(8));//1
console.log(Math.sign(0));//0

//pow return the power 
console.log(Math.pow(2,3));//8
console.log(Math.pow(2,5));//32

//min and max
console.log(Math.min(2,4,5,6,8,9,89,90));//2
console.log(Math.max(4,6,7,89,90,56,3,2,1));//90

//Math random
console.log(Math.random());
//returns the random integer from 0 to 9
console.log(Math.floor(Math.random()*10));
//returns a random integer from 0 to 10
console.log(Math.floor(Math.random()*11));
//returns a random integer from 0 to 99
console.log(Math.floor(Math.random()*100));
//returns a random integer from 0 to 10
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 6) + 1);
//function using random
function randomNumber (end){
    const num = Math.floor(Math.random() * end) + 1;
    return num;
}
console.log(randomNumber(10));

//generate otp using Math.random
function generateOTP(){
    let one = Math.floor(Math.random() * 10);
    let two = Math.floor(Math.random() * 10);
    let three = Math.floor(Math.random() * 10);
    let four = Math.floor(Math.random() * 10);
    let otp = `Your otp is ${one} ${two} ${three} ${four}`;
    return otp;
}
console.log(generateOTP());

//date object
const now = new Date();
console.log(now);   

const now1 = new Date("dec 20 2023 18:22:02");
console.log(now1);

//month are zero based like array (jan = 0, feb = 1, ..)
//days are also zero based (sunday = 0, monday =1,..)
const now3 = new Date(2023, 0,12,13,56,66,23);
console.log(now3);

//javascript date are started from 1970
const now5 = new Date(0);
console.log(now5);

//date are objects so we can use methods
console.log(new Date().getDate());
console.log(new Date().getMonth());
console.log(new Date().getFullYear());
console.log(new Date().getDay());

//set date year and month time
const now = new Date();
// console.log(now.setDate(2));*/

/*Guess the number Game
Create a small game where you input a number from user (x as number) between 1 to 20,
then if number match log in console congratulations you wins and if not then log in 
console you lose

also take care of two points , take care of case when user input a number outside
of range ex-x=100
if user input noting then log in console that it was empty
Hint : use math object to generate random numbers*/

/*function numGen(){
    const num = Math.floor(Math.random() * 20) + 1;
    return num;
}
const correctnumber = numGen();
const userInput = Number(prompt("Guess a number between 1 to 20"));
if(userInput===0) console.log("Please enter a number, it was empty!");

if(userInput>=0 && userInput<=20){
    if(userInput === correctnumber){
        console.log("Congratulations you win!");
    }
    else{
        console.log("You lose! try again..");
    }
}else{
    console.log("you enter a number not in range!");
}*/

/*bank of bareilly give a task to developer to make a app with two functionality 
as following..
1. collect user information {name,address, amount to deposit}
2. store them with current date and time
create new object and combine both of them 
const now = new Date();

const fullname = prompt("Name");
const add = prompt("address");
const amount = Number(prompt("amount"));

const person = {
    fullName:fullname,
    address:add,
    deposit:amount,
    time:now
};
console.log(person);
const time = new Date();

const name = prompt("name");
const adress = prompt("address");
const amout = Number(prompt("Enter amount"));

const per = {
    Name: name,
    addr: adress,
    depo: amout,
    times: time
};
console.log(per);*/

/*create a footer using date object and print as following 
footer 1 {company name} copyright @ since 1920
footer 2 {company name} copyright @ since {present year} 
hint: use date object
use predefined om code in video and use object to store company information */
const now = (new Date).getFullYear();

const company = {
    companyName: "Google",
    aboutCompany: "It is a search engine",
    now: 1920
};
//const output = `${company.companyName} copyright @ since ${company.now}`
const output = `${company.companyName} copyright @ since ${now}   `
//predefined dom code
const a = document.querySelector(".target");
a.textContent = `${output}`



                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              





