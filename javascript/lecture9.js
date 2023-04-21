/*//set 
//empty set
const set = new Set([]);

//create set with any data types
const mySet = new Set([1,2,3,5,6,7,8,1,8,8,9]);
const mySet1 = new Set(["one", "two"]);
const mySet2 = new Set([true, true,false,true]);
const mySet3 = new Set([1,2,3,false,true, "blame"]);
const mySet4 = new Set([{fullname: "Gunjan", lastname: "gangwar"}])
console.log(mySet,mySet1,mySet2,mySet3,mySet4);

//type of set
console.log(typeof mySet);//object

//use in array
const arr = [1,3,2,4,5,6,6,4,4,3,3,3,7,7,8,9];
console.log(arr);

const mySet7 = new Set([arr]);
console.log(mySet7);
console.log([...mySet7]);//using spread operator for make an array

//set methods
// add values
const emptySet = new Set([]);
emptySet.add(4);
emptySet.add(3);
emptySet.add(9);
emptySet.add(3);
emptySet.add("Gunjan");
console.log(emptySet);

//size of set 
console.log(emptySet.size);

//check present values
console.log(emptySet.has("Gunjan"));
console.log(emptySet.has(0));

//delete perticular value
console.log(emptySet.delete(3));
console.log(emptySet);

//delete all value in set
mySet.clear();
console.log(mySet);

//set is also a object so we can use loop
const setRandom = new Set(["html","css", "javascript", "nodejs"]);
for(let i of setRandom){
    console.log(i);
}

//weak Sets
// set in which only objects are passed as values
const obj = new Set([
    {fullname: "Gunjan"},
    {LastName: "Gangwar"},
    {branch: "IT"},
    {city: "barielly"}
]);
console.log(obj);
console.log(obj.size);


//map 
// 
const myMap = new Map();
console.log(myMap);
//syntax for map
const mymap = new Map([
    ["first", 23],
    ["second", true],
    [23, true],
    ["value", "first"]
]);
console.log(mymap);

//map are also object
console.log(typeof mymap);
//add values
mymap.set("greet", "hello");
console.log(mymap);
//only unique value are allowed like set 
mymap.set("value", "first");
console.log(mymap);

//size of map
console.log(mymap.size);

//get method
console.log(mymap.get(23));


//HOisting
console.log(hello());//can access before intialization
function hello(){
    return `my first function`;
}
// console.log(a());//not accessible before intialization //hoisting works only with function declaration
const a = function(){
    return `my second function`;
};
console.log(a());

//hoisting works diffrently with var let const
console.log(a1);
var a1 = 10;//var = undefined

// console.log(b);
let b = 30; //let and const = refrence error

//reference vs value
//primitive data type
let x = 5;
// let y = x;//y is now copy of x

y = 10;//changing y does not effect x
console.log(x);
console.log(y);


x = y;
x = 15;
console.log(x,y);

//reference value example
let arr1 = [1,2,3];
let arr2 = arr1;//arr2 is now reference of arr1
arr2.push(4); //changing value effect both array
console.log(arr1);
arr1.pop();
console.log(arr2);
console.log(arr1);

//object methods
//Object.keys(), Object.values(),Object.entries()

const personInfo = {
    fullName: "blame",
    email: "xyz@gmail.com",
    education: "B.Tech",
    Branch: "Information Technology",
    City: "Noida",
    Job: "front-end",
    Experience: 1,
    fullStack: true,
    Language: ["html", "CSS", "JavaScript", "reaactJs","nodeJs"],
};
const a2 = Object.keys(personInfo);
const b1 = Object.values(personInfo);
const c = Object.entries(personInfo);
console.log(a2);
console.log(b1);
console.log(c);
for(let i of a2){
    console.log(i);
}
for(let i of b1){
    console.log(i);
}
for(let i of c){
    console.log(i);
}*/
// Object.entries
const arr4 = [2,4,6,8,10];
const result = Object.entries(arr4);
for(let i of result){//normal for of loop
    console.log(i);
}
for(let [i,j] of result){//loop with index number
    console.log(i,j);
}
