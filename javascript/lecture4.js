//fuction in js
/*function myFirstFunction(){
    console.log("hello this is my first function!");
    console.log("my first function!");
}
myFirstFunction();
myFirstFunction();

//parameter and arguments in function
//add two no
function addTwo(one, two){
    let sum = one + two;
    console.log(`sum of ${one} and ${two} is = ${sum}`);
}
addTwo(2,4);
addTwo(798, 9999);

//add three no
function addThreeNo(one, two, three){
    let sum = one + two + three;
    console.log(`sum of ${one}, ${two} and ${three} is = ${sum}`);
}
addThreeNo(2,4,8);
addThreeNo(798, 9999, 89);

//store the value of parameters in variables
function addNumber(One, Two, Three){
    let firstNumber = One;
    let secondNumber = Two;
    let thirdNumber = Three;
    let Sum = firstNumber + secondNumber + thirdNumber;
    console.log(`sum of ${firstNumber}, ${secondNumber} and ${thirdNumber} is = ${Sum}`);
}
addNumber(23,45,69);

//return keyboard
function addNumber(One, Two, Three){
    let firstNumber = One;
    let secondNumber = Two;
    let thirdNumber = Three;
    let Sum = firstNumber + secondNumber + thirdNumber;
    return Sum;
}
console.log(addNumber(2,4,5));
const result = addNumber(23,45,69);
console.log(result);
console.log(addNumber("hi ", "hello ", "hey"));

//anonymous function
const add = function(a, b){
    let sum = a + b;
    return sum;
};
const result = add(7, 6);
console.log(result);
console.log(add(2,5));

const personName = function(first, last){
    const fullName = `your fullname is ${first} ${last}`;
    return fullName;
};
console.log(personName('Gunjan', 'Gangwar.'));

const sub = function(c,d){
    const subtraction = c-d;
    return subtraction;
}
console.log(sub(6,2));
const res = sub(9,2);
console.log(res);
 
//arrow function
let twoTimes = (enterNumber) => enterNumber*2;
console.log(twoTimes(4));

let twoNo = (e, f) => e * f;
console.log(twoNo(4,7));

let divide = (first, second) => {
    const div = first / second;
    return div;

};
console.log(divide(4, 2));
console.log(divide(36,6));

// function randomString(a,b){
//     const result = `full name is this ${a} and ${b}`;
//     return result;
// }
// console.log(randomString("random", "string"));

function randomString(a,b){
    return a+b;
}
console.log(randomString(2, 4));

function hello(greet, first){
    let myGreet = greet;
    let yourGreet = first;
    const finalGreet = myGreet + yourGreet;
    return finalGreet; 
}
console.log(hello("hi", " Namaste"));

let value = function(r,u){
    let t = r + u;
    return t;
};
console.log(value(4,6));

let result = (a,b) => a*b;
console.log(result(4,3));

let finalResult = (a,b) => {
    return a-b;
};
console.log(finalResult(4, 1));

//use a function inside another function
function doit(ho){
    return ho * 2;
}
function langPerHours(a,b){
    const d = doit(a);
    const e = doit(b);
    return `${d} ${e}`;
}
console.log(langPerHours(2,5));

function arr(first){
    return first ** 2;
}
function myArr(value1, value2){
    const one = arr(value1);
    const two = arr(value2);
    return `Entered values are ${one} and ${two}`;
}
console.log(myArr(7, 8));

//write a function to count one to n
// function counting(n){
//     for(let i=1; i <= n; i++){
//         console.log(i);
//     }
// }
// counting(10);
// counting(5);

function counting(enterNumber){
    const n = enterNumber;
    for(let i=1; i <= n; i++){
        console.log(i);
    }
}
const number = counting(
    Number(prompt("Enter the number upto which you want counting..")));*/

/*write a function to take input as (name brach roll no) then output as
name:Gunjan Gangwar
branch: it
rollno: 3
college: ssvit
batch: 2020-2023 
*/
/*const studentInfo = function(name, branch, rollno){
    console.log(`Name: ${name}`);
    console.log(`Branch: ${branch}`);
    console.log(`Rollno: ${rollno}`);
    console.log(`college: ssvit`);
    console.log(`batch: 2020-2023 `);
}
studentInfo("Gunjan", "It", 3);
studentInfo("pooja","It", 9);*/

// write a function to input of as (name,phy,che,bio) {(gunjan,100, 100,100)} then output as
// name:gunjan
// total marks:300
// percentage:100
// branch:cs/it

const studentInfo = function(name, phy, che, bio){
    let totalMarks = phy + che + bio;
    let per = (totalMarks*100)/300;
    console.log(`Name: ${name}`);
    console.log(`total marks: ${totalMarks}`);
    console.log(`Percentage: ${per} %`);
    console.log(`Branch: cs/it`);
}

let a = prompt("Enter your name: ");
let b = Number(prompt("Enter your physics marks: "));
let c = Number(prompt("Enter your chemistry marks: "));
let d = Number(prompt("Enter your bio marks: "));
studentInfo(a, b, c, d);










