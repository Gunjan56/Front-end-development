//object in js
/*const myFirstObject = {
    fullName: "Gunjan Gangwar",
    job: "front-end-developer",
    language: "javaScript"
};
console.log(myFirstObject);

//object can be access by . dot notation
console.log(myFirstObject.fullName);
//bracket notation
console.log(myFirstObject['language']);

//modifying properties
myFirstObject.fullName = 'Gunjan';
console.log(myFirstObject.fullName);

//delete any property
delete myFirstObject.language;
console.log(myFirstObject);

//use different datatype
myFirstObject.location = "Baheri";
myFirstObject.DOB = 2000;
console.log(myFirstObject);

//check any given property if exist the given object
console.log("job" in myFirstObject);
console.log("Education" in myFirstObject);

//add new properties
myFirstObject.city = "Bareilly";
console.log(myFirstObject);

//add property by bracket notation
myFirstObject["profession"] = "Software developer";
console.log(myFirstObject);

//methods in object
const myObject = {
    Name: "Gunjan",
    Class: "Btech",
    Branch: "IT",
    passingYear: function (year){
        return (`passing year is ${year+4}`);
    },
    addmissionYear: 2020
};
console.log(myObject.passingYear(2020));
console.log(myObject);*/

//this keyword in js
const myObject1 = {
    Name: "Gunjan",
    Class: "Btech",
    Branch: "IT",
    passingYear: function (){
        return (`${this.Branch}`);
    },
    randomString: function(){
        return `${this.Class}`;
    },
    addmissionYear: 2020
};
console.log(myObject1.randomString(), myObject1.passingYear());
console.log(this);//refers to global object
const gamerPro = {
    fullName: "Gunjan",
    isGamer: "yes",
    gamerName: function(){
        // console.log(`${this.fullName}`);
        // console.log(`${gamerPro.fullName}`);
        let a = this.isGamer;
        return a;
    },
};
console.log(gamerPro.gamerName());
//create a object
// const myInfo = {
//     fullName: "Gunjan Gangwar",
//     city: "Bareilly",
//     HomeTown: "Baheri",
//     Languages: ["Html", "Css", "js", "c++"],
//     Hobbies:["badminton", "Reading", "Listining songs"],
//     College: "ssvit",
//     Branch: "IT"
// };
// console.log(myInfo);

// //create a object of a item for a ecommerce website
// const laptop = {
//     productName: "asus gaming laptop",
//     price: "The price of the product is 1 lakh",
//     color: ["red","blue", "green"],
//     description: "The ASUS ROG gaming laptops are high-end gaming laptops designed specifically for gamers who demand high-performance computing power and advanced graphics capabilities.",
//     windowsInstalled: true
// };
// console.log(laptop);
//practice this keyword
const test = {
    prop:42,
    func: function(){
        return this.prop;
    },
};
console.log(test.func());
function getThis(){
    return this;
}
const obj1 = {name: "obj1"};
const obj2 = {name: "obj2"};

obj1.getThis = getThis;
obj2.getThis = getThis;
console.log(obj1.getThis());
console.log(obj2.getThis());
const obj3 = {
    __proto__: obj1,
    name:"obj3",
};
console.log(obj3.getThis());

let counter = {
    count: 0,
    increment: function(){
        counter.count++;
    }
}

console.log(counter.increment());
console.log(this);
console.log('[ ');

