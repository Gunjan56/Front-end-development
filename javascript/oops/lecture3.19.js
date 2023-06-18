//Encapsulation => restrict the direct access of object properties or private or public properties
//declare property using # symbol start of its name(private property)
class Server{
    #serverApiKey;
    #password
    constructor(){
        this.serverName = "firebase";
        this.#serverApiKey = 4842567;
        this.#password = "@1234";
    }
    start(){
        console.log(`server is starting!`);
    }
    serverLogic(){
        console.log(`logic of server`);
    }
}
const request1 = new Server();
console.log(request1);//can access api key
console.log(request1.serverApiKey);//undefined

//Another example of encapsulation
class BankCustomer{
    #customerId
    #BankBalance
    constructor(cn){
        this.customerName = cn;
        this.#customerId = 6754;
        this.#BankBalance = 45678;
    }
    AccountType(aType){
        console.log(`customer name ${this.customerName} has ${aType} account. `);
    }
}
const bankCustomer = new BankCustomer("John");
console.log(bankCustomer);//hiding the customerId and BankBalance
console.log(bankCustomer.AccountType("saving"));

//Abstraction//hides the details which are not related to problem
//hide the details using inheritance
class ServerLogic{
    serverLogic(){
        console.log("logic of server");
        console.log("server is running");
    }

}
class ServerStart extends ServerLogic{
    constructor(){
        super();
        this.serverName = "firebase";
        this.serverApiKey = 6543;
    }
    start(){
        console.log('server is started');
    }
}
const requestServer = new ServerStart();
console.log(requestServer.serverLogic());

//Another example of abstraction
class Players{
    #playerId
    #playerAge
    constructor(pn, pc){
        this.#playerId = 3456;
        this.#playerAge = 32;
        this.playerName = pn;
        this.playerCountry = pc;
    }
    
}
class GameOn extends Players{
    constructor(pn, pc, pt){
        super(pn,pc)
        this.playerTeam = pt;
    }
    playerScore(ps){
        console.log(`player name ${this.playerName} is currently playing and having score ${ps} from ${this.playerCountry}`);
    }

}
const player1 = new GameOn("Sachin", "India", "Mumbai Indians");
const player2 = new GameOn("honi", "India", "west Bangal");
console.log(player1.playerScore(34));
console.log(player1);
console.log(player2.playerScore(99));
console.log(player2);

//polimorphism
//many forms has many concept
class Animal{
    constructor(an){
        this.animalName = an;
    }
}
class Dog extends Animal{
    constructor(an, acolor){
        super(an);
        this.animalcolor = acolor;
    }
    animalSound(animalSound = "woof woof"){
        console.log(`${this.animalName} is making sound ${animalSound} having ${this.animalcolor} color`);
    }
}
class Cat extends Animal{
    constructor(an, acolor){
        super(an);
        this.animalcolor = acolor;
    }
    animalSound(animalSound = "meow meow"){
        console.log(`${this.animalName} is making sound ${animalSound} having ${this.animalcolor}`);
    }
}
class Bird extends Animal{
    constructor(an, acolor){
        super(an);
        this.animalColor = acolor;
    }
    animalSound(animalSound = "chi chi"){
        console.log(`${this.animalName} is making sound ${animalSound} having ${this.animalColor
        } color`);
    }
}

const animal1 = new Dog("blaze", "White");
console.log(animal1.animalSound());
const animal2 = new Cat('catty', "black");
console.log(animal2.animalSound());
const animal3 = new Bird("Parrot", "Green");
console.log(animal3.animalSound());

//question
class StudentPersonalInformaation {
    #AadharCardNumber;// use of Encapsulation
    #phoneNumber;
    constructor(phoneNumber, AadharCardNumber){
        this.#phoneNumber = phoneNumber;
        this.#AadharCardNumber = AadharCardNumber;
        this.university = "AKTU";
        this.city = "BLY";
        this.college = "SSvit";
    }
}
class Student extends StudentPersonalInformaation{
    constructor(phoneNumber,AadharCardNumber, fullName, branch, year, languages){
        //Use of inheritance and abstraction
        super(phoneNumber,AadharCardNumber)
        this.fullName = fullName;
        this.branch = branch;
        this.year = year;
        this.languages = languages;
    }
    intro(){
        console.log(`my name is ${this.fullName} student of ${this.year} year having good knowledge of ${this.languages}`);
    }
    set StudentClass(c){
        this.SClass = c;
    }
    get capitalName(){
       return this.fullName.toUpperCase();
    }    
}
Student.prototype.seatNumber = "512";

class StudentFamilyInfo extends Student{
    constructor(phoneNumber,AadharCardNumber, fullName, branch, year, languages,fm, fatherName){
        super(phoneNumber,AadharCardNumber, fullName, branch, year, languages)
        this.studentFamilyMembers = fm;
        this.studentFatherName = fatherName;
    }
    //polymorphism
    intro(){
        console.log(`my name is ${this.fullName} student of ${this.year} my father name is 
        ${this.studentFatherName} we are ${this.studentFamilyMembers} member in our family.`);
    }
}

const student1 = new Student(49806745, 3456, "blame", "IT", 2020, "Javascript and Python");
console.log(student1);
console.log(student1.intro());

console.log(student1.capitalName);
const student2 = new Student(49806745, 3456, "blaze", "IT", 2020, "Javascript and Python");
student2.SClass = 12;
console.log(student2);

const student3 = new StudentFamilyInfo(456, 3452, "GG", "IT", 2020, "Java and c++", 4, "xyz");
console.log(student3.intro());


