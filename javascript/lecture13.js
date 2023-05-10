//array methods
//reverse method
// const twoTimes = [2,4,6,8,10];
const arrString = ["a", "b", "c", "d"];
// const result = twoTimes.reverse();
const result = arrString.reverse();
console.log(result);

//flat method
const twoTimes1 = [10, 20,30,40, [0.1, 0.2, 0.3,[2,3,5,4,[5,7]]]];
// console.log(twoTimes1.flat());
console.log(twoTimes1.flat(3));//flat the array by arr layers

//every method//works on condition by every element
const everyMethod = [10,30,40,50];//true
everyMethod.push(2);//false
// const result1 = everyMethod.every( (element) => element > 5);
const result1 = everyMethod.every(function everyArrMethod(element){
    return element > 5;
})
console.log(result1);

//find method
const findMethod = [2,4,6,8,10,15,20];
// const result2 = findMethod.find( (element) => element > 10);
const result2 = findMethod.find(res=function(element){
    return element > 5;
})
console.log(result2);

//findIndex method
const arrFunction = function(i){
    return i >10;
}
const findIndexOfArr = [2,4,5,6,15,12];
// const result3 = findIndexOfArr.findIndex( (i) => i > 10);
const result3 = findIndexOfArr.findIndex(arrFunction);
console.log(result3);

//some method
const someArr = [1,2,4,6,8,7,10];
const result4 = someArr.some( (i) => i>1);
console.log(result4);

//fill method
const fillMethodOfArr = [1,3,56,34,12];
const result5 = fillMethodOfArr.fill(10,1,2);
console.log(result5);

const HighestScore = [];
HighestScore.length = 10;
console.log(HighestScore.fill(12));

//sort method 
const sortArrayMethod = [3,2,5,6,8,3,12,0,4,7,1];
// const result6 = sortArrayMethod.sort();
const result6 = sortArrayMethod.sort((a,b) => a-b);//ascending order
const result7 = sortArrayMethod.sort((a,b) => b-a);//descending order
console.log(result6);

//foreach method
const arr = [1,2,3,6,12,14,15];
arr.forEach( (i) => {
    console.log( i+1);
});

//homework
//use function expression or function declaration of anonymas instead of arrow function

//scheduling setTimeout and setInterval
//syntax of set timeout
// setTimeout(function, delay);

//function or any code of block
//delay should be in miliseconds
//like 3000 which is 3 sec
// 1 second = 1000 milisecond
let fn = "Gunjan";
setTimeout(function (){
    console.log(fn);
}, 3000) 

//fun activity
setTimeout(function(){
    console.log('loding your system files');
}, 4000)
setTimeout(function(){
    console.log('loding your system ===== 0% completed =====');
}, 6000)
setTimeout(function(){
    console.log('loding your system ===== 50% completed =====');
}, 8000)
setTimeout(function(){
    console.log('loding your system ===== 80% completed =====');
}, 10000)
setTimeout(function(){
    console.log('loding your system ===== 100% completed =====');
}, 12000)
setTimeout(function(){
    console.log('loding your system are ==== ready =====');
}, 15000)

//arguments in setTimeout
setTimeout(function(fn){
   console.log(`How are you! ${fn}`);
}, 3000)//undefined

setTimeout(function(fn,name){
    console.log(`How are you! ${fn} ${name}`);
 }, 3000, "Hello", "Gunjan")

//declare function outside//pass function as argument
function myInfo(fn, dy){
    console.log(`Hi ${fn}, Today is a ${dy} day`);
}

setTimeout(myInfo,3000, "Gunjan", "Good");

//clearTimeOut 
let timer = setTimeout(function(fn){
    console.log(`hello ${fn}`);
}, 2000, "Gunjan");
//log time id

clearTimeout(timer);

//setInterval
let timerr = setInterval( function(){
    console.log("how was your day?");
}, 3000)

//clearInterval
clearInterval(timerr)


//Questions
// 1. Zomato delivery
// zomato app ask for rating after food is delivered write a function for that condition 
// if food is delivered ask for rating after 5 seconds if food is Not delivered after 
// 5 seconds say sorry in console
function ratingApp(fooddelivery){
    if (fooddelivery==true){
        console.log("Food is delivered");
        // prompt("Please Rate our app");
    }
    else{
        console.log('sorry for delay');
    }
}
setTimeout(ratingApp, 5000, true)

//2. percentage of vitamins should be higher than 40% in humen body. there is a 
// array of different vitamins of a person as 50% 70% 50% 80% 90% 60% 85%. return
//true if body have every vitamins perfect otherwise false, create this atleast for 2 person.
const perOfVitamins = [50, 20,50, 80, 90, 60, 85];
const vitaminPercentage = perOfVitamins.every(function(i){
    return i >40;
})
if (vitaminPercentage === true) console.log("person is healthy");
if (vitaminPercentage === false) console.log("person is not heathy");

//Q3 there is a array of height of students of class in array as [162, 150, 162,172,166,150,177,164, 166,182]
//log from highest height to lowest
const StudentsHeight = [162,150,162,172,166,150,177,164,166,182];
const height = StudentsHeight.sort((a,b) => b-a);
console.log(height.forEach((i, e) => console.log(`height: ${i} index: ${e}`)));
