/*//call method
const person = {
    fullName: "blame",
    job: "full-stack developer",
    experience: 1,
    fullInfo: function(arg, arg1){
        return `my name is ${this.fullName} and i am ${this.job} having ${this.
        experience} years experience living in ${arg} hands on knowledge in ${arg1}`;

    },
};

const person2 = {
    fullName: "element",
    job: "backend developer",
    experience: 4,
};
const result = person.fullInfo.call(person2, "delhi", "JavaScript")
console.log(result);

const result1 = person.fullInfo("delhi", "Javascript");
console.log(result1);

const result2 = person.fullInfo.call(person,"Noida", "C++")
console.log(result2);

//apply method
const person2 = {
    one: 1,
    two: 2,
    name: "gunjan",
    experience: true,
    add: function(arg){
        return `my name is ${this.name} and i am having ${this.two} year experience working on ${arg}. `;

    },
};
console.log(person2.add.apply(person2,["react"]));

const person3 = {
    two: 2,
    name: "Gunja",
    add: function(arg, arg2){
        return `my name is ${this.name} having ${this.two} year experience working on ${arg} and ${arg2}`;
    }
};
console.log(person3.add.apply(person3, ["javaScript", "React"]));
//this methon still pointing to current object
console.log(person2.add("python"));
console.log(person3.add("python", "javascript"));

//Bind method
const addmisionInfo = {
    studentName: "xyz",
    branch: "IT",
    course: "B.Tech",
    studentInfo: function(arg){
        return `Student name is ${this.studentName} enrolled in ${this.course} ${this.branch} anual fees is ${arg}`;
    },
};

const result = addmisionInfo.studentInfo.bind(addmisionInfo, 50000);
const result1 = addmisionInfo.studentInfo.bind(addmisionInfo, 80000);
console.log(result());
console.log(result1());

//this still refers to current object
console.log(addmisionInfo.studentInfo(50000));

//also use call(), apply(), bind() method with normal function
const per = {
    name: "Rahul",
    city: "delhi",
};
const info = function (arg){
    return `person name is ${this.name} lives in ${this.city} works in ${arg}`;
};
const resultt = info.call(per, "HCL");
console.log(resultt);

const resulttt = info.apply(per,["hcl"])
console.log(resulttt);

const res = info.bind(per, "TCS");
console.log(res());

//Arrow Function Revisit
const person = {
    fullname: "blame",
    testing: `${this}`,
    info: function(){
    return `${this.fullname}`;
    }
};
console.log(person.info()); 

//arguments objects
function addThreee(arg, arg1, arg2){
    console.log(arguments);//array like object
    console.log(arguments[0]);//access element like array
    console.log([...arguments]);//convert arguments into array
    return arg + arg1 + arg2;
}
console.log(addThreee(10,20,30));

//it will we more wise if we use rest operator
function addThree(...arg){
    // console.log(arguments);//array like object
    // console.log(arguments[0]);//access element like array
    // console.log([...arguments]);//convert arguments into array
    return arg;
}
console.log(addThree(10,20,30));*/

//Error Handling in javascript
//try catch finally
console.log("line number 1");
console.log("line number 2");
console.log("line number 3");
console.log("line number 4");
console.log("line number 5");
let gg = "no error";
try {
    console.log(gg);
}catch(error){
    console.log("there is a error", error);
} finally{
    console.log("i will run if there is error or not");
}
console.log("line number 6");

//throw new error//defines a custom error
const a = 10;
if(a===20) throw new Error('i am the error');

//JSON javaScript object notation//data.json
//json string
const random = `{
    "name": "blame",
    "HighestScore": 230,
    "isGamer": true,
    "address": null,
    "favouriteGamer": ["gta 5", "witcher 3", "csgo", "takken 3"],
    "experience": [
        {
            "companyName": "xyz software technology",
            "duration": 2
        },
        {
            "companyName": "xyz",
            "duration": 4
        }
    ],
    "anotherGamer": {
        "name": "hello"
    },
    "gamer": [
        {
            "value": true
        }
    ]
}`;
//json.parse//converts json string into javascript object
const result = JSON.parse(random)
console.log(result.HighestScore);

//json.stringify//converts javascript objects or value into Json string
const result1 = JSON.stringify(random);
console.log(result1);









