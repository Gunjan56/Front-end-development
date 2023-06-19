//inheritance
class BTech{
    constructor(ts){
        this.totalStudents = ts;
        this.totalTeachers = 5;
    }
   
}
class BTechIt extends BTech {
    constructor(ts, rNo, dH){
        super(ts)
        this.roomNo = rNo;
        this.departmentHead = dH;
        
    }
    ItdepartmentHead(){
        console.log(`${this.departmentHead} sir is the head of IT departMent.`);
    }
}
class BtechCs extends BTech{
    constructor(ts, rNo, dH){
        super(ts)
        this.roomNo = rNo;
        this.departmentHead = dH;
    }
    CsdepartmentHead(){
        console.log(`${this.departmentHead} sir is the head of IT departMent.`);
    }
}
const btechIt = new BTechIt(43,4,"Mr Ravi");
console.log(btechIt);
const btechCs = new BtechCs(45, 4,"Mr Rohan");
console.log(btechCs);
console.log(btechIt.ItdepartmentHead());
console.log(btechCs.CsdepartmentHead());

//encapsulation
class Vegitables {
    #vegitablePrice 
    #VegitableQuantity
    constructor(vN, vP,vQuantity,Vegitableavailability){
        this.VegitableName = vN;
        this.#vegitablePrice = vP;
        this.#VegitableQuantity = vQuantity;
        this.Vegitableavailability = Vegitableavailability;
    }
    Vegitablesession(session){
        console.log(`${this.VegitableName} is available in ${session} sessions`);
    }
}
const vegitable = new Vegitables("Capsicum","25/kg","45kg",true);
console.log(vegitable);
console.log(vegitable.Vegitablesession("summer and winter"));

//abstraction
class Employee {
    #EmployeeId
    #EmployeedOB
    constructor(eN,eId, edob, eAge){
        this.EmployeeName = eN;
        this.#EmployeeId = eId;
        this.#EmployeedOB = edob;
        this.EmployeeAge = eAge;
    }
}
const employee = new Employee("Ramesh",3456, 19-01-2001, 24);
console.log(employee);

//polymorphism
class GamePlayer{
    constructor(gName,wScore){
      this.gameName = gName;
      this.WinningScore = wScore;
    }
}
class LudoPlayer extends GamePlayer{
    constructor(gName, wScore, ...Pn){
        let gameWinner = Math.floor(Math.random()*Pn.length);
        super(gName, wScore);
        this.playersName = Pn;
        this.Winner = Pn[gameWinner];
    
        
    }
    GameWinner(){
        if(50<this.WinningScore){
            console.log(`${this.Winner} is winner of this ${this.gameName} game`);
        }
        else{
            console.log(`${this.playersName} don't have any winning Score \nWinning Score = ${this.WinningScore} \nYour Score = 50`);
        }
    }
}
class ChessPlayer extends GamePlayer{
    constructor(gName, wScore, ...Pn){
        let gameWinner = Math.floor(Math.random()*Pn.length);
        super(gName, wScore, ...Pn)
        this.playersName = Pn;
        this.Winner = Pn[gameWinner];
    }
    GameWinner(){
        if(50<this.WinningScore){
            console.log(`${this.Winner} is winner of this ${this.gameName} game`);
        }
        else{
            console.log(`${this.playersName} don't have any winning Score \nWinning Score = ${this.WinningScore} \nYour Score = 50`);
        }
    }
}

const Game1 = new LudoPlayer("Ludo", 100, "Rohan", "Sohan", "John");
console.log(Game1);
console.log(Game1.GameWinner());
const Game2 = new ChessPlayer("Chess",85, "Rohan", "Ram", "Mohan");
console.log(Game2);
console.log(Game2.GameWinner());

