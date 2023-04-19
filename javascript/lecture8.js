/*//break //continue
for(let i = 1; i <=5; i++){
    console.log(i);
    if(i===2){
        console.log(i);
        //  break;
        continue;
    }   
}
//for of loop//apply on iterable data //which have index value...array,string
const array = [2,3,5,6,7];
for(let i of array){
    console.log(i);
} 
const person = "blame";
for(let i of person){
    console.log(i);
}

//for in loop // used in object
const randomObject = {
    web: "js",
    frontend: "html&React",
    backend: "nodeJs",
    cloud: "GCP"
}
for(let i in randomObject){
    // console.log(i);
    console.log(randomObject[i]);
}
for(let i in array){
    console.log(array[i]);
}

//destructing//array
const language = ["html", "css", "java", "react", "python"];
//old way
let a = language[0];
let b = language[1];
let c = language[2];
let d = language[3];
console.log(a,b,c,d);

//new way//after destructing
let [e,f,g,h] = language;
console.log(e,f,g,h);

//escape elements
let[i, , , , m] = language;
console.log(i,m);

//default value
const [t, u, , , , z="nodejs"] = language;
console.log(t,u,z);

//swap values
[a,b,c,d] = [c,d,a,b];
console.log(a,b,c,d);  
//object destructing
const myLang = {
    web: "javascript",
    andriod: "java",
    backend: "nade&django",
    ai: "python"
};
//declare varibles using properties
const {web:a, andriod: b, backend: c, ai: d, cloudd: o} = myLang;
console.log(a,b,c,d);

//store same variable with property name
const {web, andriod, backend,ai} = myLang;
console.log(web, ai, andriod,backend);

//spread operator(three dots ... right hand side)
const one = [1,2,3,4,5];
const two = [4,5,6,4,0];
console.log(one);
console.log(two);
console.log(...one);
console.log(...two);

//make a copy array using spread
const threeCopy = [...two];
console.log(...threeCopy);

//add two array
const add = [...one, ...two];
console.log(...add.sort());

//put values in array
const oneTwo = [10,20,30,...one, 40,56, ...two];
console.log(...oneTwo);

//spread on string
const string = "blame";
console.log(...string);

//input in array then use spread to send it as seperate in function as para
function addThree(a,b,c){
    return `sum is = ${a + b + c}`;
}
const arr = [10,20,30];
console.log(addThree(...arr));
//spread operator in objects
const myObj = {
    first: "Hindi",
    second: "English"
};
//typeError: obj is not iterable
// console.log(...myObj);
//use spread object inside {}
console.log({...myObj});
//add new property
console.log({...myObj, cloud: "ai"});

//make copy
const myobj2 = ({...myObj});
console.log(myobj2);

//add two objects
const myobj3 = {
    Name: "gunjan",
    last: "gangwar"
};
console.log({...myObj, ...myobj3, lang: 'English'});

//rest operator(...left hand side)

const arr = [10,20,30,50,80,90];
const arr2 = [2,4,5,6,7,8,9,0,6];

const [a,b, ...remain] = [...arr, ...arr2];
console.log(a,b,remain);

const [...remainn] = [...arr];
console.log(...remainn);

//rest operator in object
const person = {
    fullName: "blame",
    city: "ncr",
    country: "India",
    occupation: "developer"
};
const {...rem} = {...person}
console.log(rem);

//rest operator as parameter
function add(...arr){
    let sum = 0;
    for(let i of arr){
        sum = sum + i;
    }
    return sum;
    
}
console.log(add(10,10,10,10));


//examples
//Q1 There are 152 lecture ,students have to attend to sit in exam, every student must
// have a attend more than 51 lecture, create array as following and log like you attend 80 lec and 
//attendence percentage is % you can sit in exam
// student = [80,90,88,54,66,33,20,55,50]


const student = [80,90,88,54,66,33,20,55,50];
// for (let i = 0; i <= student.length; i++){
//     const per = Math.floor((student[i] *100)/152);
//     let can = "";
//     if(student[i]>51){
//        can = "can";
//     }
//     else {
//         can = "can't";
//     }
//     console.log(`you attend ${student[i]} lecture and attendence percentage is ${per}% you ${can} sit in exam`);
// }
// using for of loop
for (let i of student){
    const per = Math.floor((i *100)/152);
    let can = "";
    if(i>51){
       can = "can";
    }
    else {
        can = "can't";
    }
    console.log(`you attend ${i} lecture and attendence percentage is ${per}% you ${can} sit in exam`);
}

//Q2 given a objct as following, log as the key is fullName and value is blame.

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
for(let i in personInfo){
    console.log(`key is ${i} and value is ${personInfo[i]}`);
}

//Q3 there are 4 object as following, use js to make them in one group or one object and then log it to 
// console, also make copy of combined Object
// info = {
//     fullName: "blame",
//     email: "blame@gmail.com",
//     city: "noida"
// };
// education = {
//     education: "B.Tech",
//     Branch:"It",
//     secondarySchool: "DPS DELhi"
// };
// skills = {
//     fullstack: true,
//     languages: ["html", "css", "javascript","reactJs"],
// };

// medicalFitness = {
//     medicalFit: true,
//     Insurance: true
// };

const info = {
    fullName: "blame",
    email: "blame@gmail.com",
    city: "noida"
};
const education = {
    education: "B.Tech",
    Branch:"It",
    secondarySchool: "DPS DELhi"
};
const skills = {
    fullstack: true,
    languages: ["html", "css", "javascript","reactJs"],
};

const medicalFitness = {
    medicalFit: true,
    Insurance: true
};

const personFullInfo = ({...info, ...education, ...skills, ...medicalFitness});
console.log(personFullInfo);

const personFullInfoCopy = {...personFullInfo};
console.log(personFullInfoCopy);

*/

// Q4 const lang = ["python", "java", "golang", "html", "css", "js", "reactjs", "nodejs"]
// store first 3 languages in seperate variable then remaining in web variable

const lang = ["python", "java", "golang", "html", "css", "js", "reactjs", "nodejs"];
const [a,b,c,...web] = lang;
// console.log(a,b,c,web);
console.log(a,b,c,...web);//unpack the remaing web array using spread operator


