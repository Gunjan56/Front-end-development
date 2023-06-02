//how to create class and object
//1. using Constructor function
//2. using ES6 classes
//3. using object create

//using constructor function
const PubgPlayer = function (pn, country, rank ){
    this.playerName = pn;
    this.playerCountry = country;
    this.playerRank = rank;

    //method
    this.isAllowed = function (){
        console.log("you are allowed to Play!");
    }
};

const player1 = new PubgPlayer("Blame", "India", "Pro");
console.log(player1);
const player2 = new PubgPlayer("Gunjan", "India", "pro");
const player3 = new PubgPlayer("anmol", "london", "Super");
console.log(player2, player3);

const Citizen = function(country, capital, population){
    this.country = country;
    this.capital = capital;
    this.population = population;

    this.favorite = function(food){
        return (`favorite food is ${food}!`);
    };
};
const result = new Citizen("India", "delhi", 1240000000000)
console.log(result);
console.log(result.favorite("Panipuri"));

console.log(player1 instanceof PubgPlayer);//true
console.log(player2 instanceof Citizen);//false

//create class using regular function as constructor function
function UserAccount(fn, ln, bn){
    this.userName = fn;
    this.userLocation = ln;
    this.userBrowser = bn;

    this.info = function(){
        console.log(`the user name is ${this.userName}`);
        console.log(`user is located at ${this.userLocation} and 
        using ${this.userBrowser} browser!`);
    };
    // this.user1Info = () => {
    //     console.log("yes");
    // }
    this.userpassword = "saved";
    this.userPassword = function(){
        console.log(`your password is ${this.userpassword}`);
    }
}
const user1 = new UserAccount("blame", "UP", "Chrome");
const user2 = new UserAccount("gunjan", "UP", "bing");
console.log(user1, user2);
console.log(user1.info());
console.log(user2.userPassword());
//prototype and __proto__
console.log(UserAccount.prototype);
console.log(UserAccount.__proto__);

//Create class using ES6 Classes
class PubgPlayerInfo{
    constructor(fn, cn, pr){
        this.playerName = fn;
        this.playercountry = cn;
        this.PlayerRank = pr;
    }
    isAllowed(){
        console.log("Player is allowed to play!");
    }
    notAllowed(){
        console.log(`${this.playerName} is not allowed to play!`);
    }
}
const player7 = new PubgPlayerInfo("Blame", "Paris", "Pro");
console.log(player7);
const player8 = new PubgPlayerInfo("tt", "USa", "Pro");
console.log(player8.notAllowed());

class UserAc {
    constructor(an, ac, al){
        this.accountName = an;
        this.accountNo = ac;
        this.accountLocation = al;
    }
    accountTYpe(){
        console.log("saving account");
    }
}
const user = new UserAc("blame", 23333432, "UP");
const userr = new UserAc("Rohan", 345327, "Mumbai");
console.log(user);
console.log(userr.accountTYpe());
console.log(userr instanceof UserAc);

//create class using Object.create
const UserInfo = {
    init(un, unn){
        this.userName = un;
        this.userNumber = unn;
    },
    //method
    userPass(){
        console.log("valid!");
    }
}
const user9 = Object.create(UserInfo);
user9.init("Blame", 7890123);
console.log(user9);
console.log(user9.userPass());

//practice questions
//1. You have to develop a banking app using oops create a class named as bankOfIndia
// with some properties as customer name, address, phone number set country and initial balance
//must be rs 2k create a method as account balance for total balance of customer
//( total = initial + deposit)
const BankOfIndia = function(cn, add, pn, Balance = 2000){
    this.customerName = cn;
    this.address = add;
    this.PhoneNo = pn;
    this.customerCountry = "India";
    this.intialBalance = Balance;

    this.accountBalance = function(deposit){
        let total = this.intialBalance + deposit;
        return `Total = ${total}rs`;
    }
}
const totalBalance = new BankOfIndia("Blame", "UP", 657890000);
console.log(totalBalance);
console.log(totalBalance.accountBalance(2500));

//Home work
class Beta19{
    constructor(ns, sb, sn,){
        this.studentName = ns;
        this.studentBranch = sb;
        this.studentNumber = sn;
        this.university = "AKTU";
        this.collegeName = "ssvit";
        this.Course = "B.Tech";
    }
    totalPercentage(...args){
      let total = args.reduce((a,b) => a+b);
      console.log(`marks = ${args}`);
      console.log(`total = ${total}`);
      let per = (312*100)/total;
      console.log(`student percentage = ${per.toFixed(2)}`);
    }
}
const studentInfo = new Beta19("Pooja","IT", 98056789);
const studentInfo2 = new Beta19("Blame", "IT", 4567890);
const studentInfo3 = new Beta19("Blaze","CS", 8790546);
const studentInfo4 = new Beta19("rrrr", "CS", 78904567);
console.log(studentInfo);
console.log(studentInfo.totalPercentage(72,75,88,85));
console.log(studentInfo2.totalPercentage(23,45,67,34,56));
console.log(studentInfo3.totalPercentage(90,75,45,30,22,56));
console.log(studentInfo4.totalPercentage(45.66, 78,45));

