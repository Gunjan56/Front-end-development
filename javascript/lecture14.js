/*//parseInt(), parseFloat() and Number
// const result = Number("2.22");//2.22
// const result = Number(false)//0
const result = Number("12.abc");//NaN
console.log(result);

//parseint use to get integer from string
console.log(parseInt("12abc"));//12
console.log(parseInt("12abc3c"));//12
console.log(parseInt("ab2c"));//NaN
console.log(parseInt("12.2"));//12
console.log(parseInt(22.3));//22
console.log(parseInt('12.2px'));//12

//parse float use to get floating number
//same as parseint only difference it return decimal numbers
console.log(parseFloat('12.22'));//12.22
console.log(parseFloat("12abc"));//12
console.log(parseFloat("12.23abc"));//12.23
console.log(parseFloat('ecr222.3'));//NaN
console.log(parseFloat('12.5px'));//12.5

//web Storage (Local storage and session storage)
//users brower local storage data will be available even after the browser is closed and reopened
//session storage is a temporary sorage when user closed the browser the data is not availabel

//local storage
localStorage.setItem("Blame", "Gamer");
localStorage.setItem("Greet", "Hello");
localStorage.setItem("Storage", true);

//update the value
localStorage.setItem("Storage",false);
localStorage.setItem("Greet", "Hi");

//use variables
const Name = "element";
const game = 30;
localStorage.setItem(Name, game);

//access local storage items
const re = localStorage.getItem("element");
const resultt = localStorage.getItem("Greet");
const res = localStorage.getItem("gg");//null
console.log(resultt, re, res);

//remove the value
localStorage.removeItem("Storage");

//length
console.log(localStorage.length);

//key index
console.log(localStorage.key(2));
//type of
console.log(resultt, typeof resultt);//string


//using other data types in local storage
const fullName = "User information";
const info = {
    loginTime: "12:00 am",
    duration: "20 minutes",
};
localStorage.setItem(fullName, JSON.stringify(info));

//access
const information = JSON.parse(localStorage.getItem("User information"));
console.log(information);

//session Storage
//set session storage
sessionStorage.setItem("Greet", "Hello");
sessionStorage.setItem("Name", "john");
sessionStorage.setItem("sunday", false);

//get the value
const ree = sessionStorage.getItem("Greet");
console.log(ree);
//remove item
sessionStorage.removeItem("sunday");
//clear the storage
sessionStorage.clear();

//cookies
document.cookie = "player1 = blame";
document.cookie = "player2 = blam";
document.cookie = "player3 = blamee";
document.cookie = "player4 = blameee";

//set expiry date for cookies
document.cookie = "Player5 = Hello; expires = sat,4 mar 2024 12:00:00 UTC";

//read or see cookie
const ress = document.cookie;
console.log(ress);

//clear cookie
//to clear a cookie set expiry date

//Refactor code--resons of code refactoring
//improving code quality
//enhancing performance
//increasing maintainability

//DRY don't repeat yourself
//normal code
const arr = [4,3,2,5,6,7,8];
const resultArr = arr.sort( (a,b) => a-b);
console.log(resultArr);

const arr1 = [4,3,2,5,6,7,8];
const resultArr1 = arr.sort( (a,b) => a-b);
console.log(resultArr1);


//Refactor code
function arrSortAscending(arr){
    const sortArr = arr.sort( (a,b) => a-b);
    return sortArr;
}
 
const resultArr3 = arrSortAscending([4,3,2,5,6,7,8]);
console.log(resultArr3);*/

//Question 
//1 => take following input from user and use local storage to save it and then log its value in console
//name: , job: , Programming languages: , experience: 
const info1 = prompt("Name: ");
const info2 = prompt("job: ");
const info3 = prompt("Programming languages: ");
const info4 = prompt("experience: ");

localStorage.setItem("Name", info1);
localStorage.setItem("job", info2);
localStorage.setItem("programming languages", info3);
localStorage.setItem("Experience", info4);
console.log(`Name: ${localStorage.getItem("Name")}`);
console.log(`Job: ${localStorage.getItem("job")}`);
console.log(`Programming languages: ${localStorage.getItem("programming languages")}`);
console.log(`Experience: ${localStorage.getItem("Experience")}`);

//Q2. clear the local storage of user in question 1 after 1 minute
setTimeout( function(){
    localStorage.clear();
}, 6000);