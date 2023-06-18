//1.inheritance in OOP's
//inherit properties from parent
class Server{
    constructor(){
        this.serverName = "firebase";
        this.serverLocation = "USA";
        this.serverMemory = "512 TB"; 
        this.serverRequest = 12;
        
    }
    
}
class CallServer extends Server{
    constructor(ln, dv){
        super();
        this.yourLocation = ln;
        this.device = dv;
       
    }
}
const newRequest = new CallServer("India", "Windows");
console.log(newRequest.serverName);
//Another Inheritance example
class ParentServer{
    constructor(sn, sr, sl){
        this.serverName = sn;
        this.serverRequest = sr;
        this.serverLocation = sl;
    }
}
class ChildServer extends ParentServer{
   constructor(sn, sr, sl, serverRange) {
    //inherits parent properties
     super(sn, sr, sl)
     this.serverRange = serverRange;
   }
}
const serverInfo = new ChildServer("google", true, "India", 100);
console.log(serverInfo.serverName);

//Another example of inheritance
class StudenPersonalInformation{
    constructor(fn, bn, yn, ln){
        this.fullName = fn;
        this.Branch = bn;
        this.year = yn;
        this.languages = ln;
    }
    intro(){
        return `Hello my name is ${this.fullName} and i am student of ${this.year}`;
    }
}
class Student extends StudenPersonalInformation{
    constructor(fn, bn, yn, ln, ad){
        super(fn, bn, yn, ln)
        this.universityName = "AKTU";
        this.city = "Bareilly";
        this.course = "B.Tech";
        this.address = ad;
    }
}
const studentInfo = new Student("Blame pro", "IT", 2020, "Javascript", "xyz road delhi");
const studentInfo1 = new Student("John", "IT", 2020, "Javascript", "xyz road delhi");
console.log(studentInfo1.intro());
console.log(studentInfo.intro());
const studentInfo2 = new Student("Riya", "IT", 2020, "Javascript", "xyz road delhi");
console.log(studentInfo2);

//super.method()
class ServerLogic{
    runServer(){
        console.log("running server logic");
        console.log("server is started");
    }
}
class CallingServer extends ServerLogic{
    start(){
        //super.method()
        super.runServer();
    }
}
const request = new CallingServer();
console.log(request.start());

//arrow function have no super.method()

//Prototypal inheritance and prototype chain
function Person(fn){
    this.fullName = fn;
}
Person.prototype.newProperty = "I am new property";
Person.prototype.newMethod = function(){
    console.log("I am a new method");
}
const blame = new Person("blame");
console.log(blame);
console.log(blame.newProperty);
console.log(blame.newMethod());


class Personn{
    constructor(n){
        this.fullName = n
    }
}
Personn.prototype.newProperty = "new property";
Personn.prototype.newMethod = function(){
    console.log("I am new method");
}
const pName = new Personn("GG");
console.log(pName);
console.log(pName.newMethod());
console.log(pName.__proto__);

//Inheritance chain
class GreatGrandParent{
    constructor(){
        this.familyName = "Super Family";
    }
}
class GrandParent extends GreatGrandParent{
    constructor(){
        super();
    }
    
}
class Parent extends GrandParent{
    constructor(){
        super();
    }
}
class Child extends Parent{
    constructor(){
        super();
    }
}
class GrandChild extends Child{
    constructor(){
        super();
    }
}

const baby1 = new GrandChild();
console.log(baby1);
console.log(baby1 instanceof GreatGrandParent);

//overriding a method
class Car{
    constructor(carName, carNumber){
        this.carName = carName;
        this.carNumber = carNumber;
    }
    superSpeed(){
        console.log("normal car");
        console.log("no super speed");
    }
}
class Supercar extends Car{
    constructor(carName, carNumber, superCarName, superCarModel){
        super(carName, carNumber)
        this.superCarName = superCarName;
        this.superCarModel = superCarModel;
    }
    //method overriding
    superSpeed(){
        console.log("super car");
        console.log("super car speed");
    }
}
const car1 = new Supercar("normal car", 1100, "BMW", 2018);
console.log(car1.superSpeed());

//static method 
class Fruit{
    constructor(){
        this.FruitName = "Apple";
        this.FruitColor = "Red";
    }
    //static method
    static heathBeniefit(){
        console.log(`${this.FruitName} is good for Health`);
        console.log(`${this.FruitColor} is natural fruit color`);
    }
    //static property
    static anotherFruit = "Grape";
}
const fruit1 = new Fruit();
console.log(fruit1.anotherFruit);//undefined
// console.log(fruit1.heathBeniefit());//can't access

//Getter and Setter
//getter method
class FlyingOfficer {
    constructor(fn){
        this.fullName = fn;
    }
    //get method
    get getName(){
        return this.fullName.toUpperCase();
    }
    //set method
    /**
     * @param {string} n
     */
    set setName(n){
        this.fullName = n;
    }
}
const officer1 = new FlyingOfficer("pilot");
console.log(officer1.getName);//using get method can access method without ()
officer1.setName = "blame";
console.log(officer1);



