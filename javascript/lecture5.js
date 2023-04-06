//array in js
let webDev1 = "html";
let webDev2 = "css";
let webDev3 = "javaScript";
let webDev4 = "Nodejs";
//array literal
const webDev = ["html", "css", "javaScript", "Nodejs"];

//length of array
console.log(webDev.length);
//array constructor
// const webevNew = new Array("html", "css", "javaScript", "Nodejs");
// console.log(webevNew);

//index value of array
console.log(webDev[0]);
console.log(webDev[1]);
console.log(webDev[2]);

const myArray = ['first', 'second', 'third', 'fourth'];
console.log(myArray);
console.log(myArray.indexOf('first'));
//type of array
console.log(typeof myArray);
let finalArr = new Array("html", "css");
console.log(typeof finalArr);
//length of an array
console.log(myArray.length);
console.log(myArray.length-1);
//replacing the value of array
myArray[0] = "c++";
console.log(myArray);

//equality of an array !never equal
console.log([2,3,4] === [2,3,4]);

//empty array
let myArray1 = [];
myArray1[0] = "Gunjan";
myArray1[1] = "Himani";
console.log(myArray1);

//one array inside another array/ 2d array
const webevNew = ["Html", "Css",["Java", "javaScript", "Mathmatics"]];
console.log(webevNew[2][2]);

//array with const keyword
webevNew[0] = "java-spring";
console.log(webevNew); 

//loops in array
const myArr = ["html", "python", "go", "MySql"];
for(let i = 0; i < myArr.length; i++){
    console.log(myArr[i]);
}
//loops in reversed order
const myArr1 = ["Html", "python", "Java", "C++"];
for(let i = myArr1.length-1; i >= 0; i--){
    console.log(myArr1[i]);
}
//types of array
const array = [1,2,3,4];
const array1 = ["string", 'string'];
const array2 = [true, false, true];
const arrayMix = ["string", 1,2,3,4,true];
console.log(arrayMix);

//array methods
const twoTimes = [2,3,4];
twoTimes.push(8);
console.log(twoTimes);

twoTimes.unshift(1);
console.log(twoTimes);
twoTimes.unshift(9);
console.log(twoTimes);
twoTimes.pop();
console.log(twoTimes);
console.log(twoTimes.indexOf(9));
console.log(twoTimes);
console.log(twoTimes.includes(10));
const oneTimes = [1,2,34,56];

const newArr = oneTimes.concat(twoTimes);
console.log(newArr);

//make an arry with admission year {[2019,2020,2021]} then output it with graduation 
//year[2023,2024...]

const admissionYear = [2019, 2022, 2020, 2021, 2016,2023, 2019,2020,2022];

for (let i =0; i < admissionYear.length; i++){
    let graduationYear = admissionYear[i] + 4;
    console.log(`your admission year is ${admissionYear[i]} 
    and will graduate in ${graduationYear}`);
}







