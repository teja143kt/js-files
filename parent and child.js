class studentdetails{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    get(){
        console.log(`this is name ${this.name} and my age is ${this.age}  `);
    }
}
class student extends studentdetails{
    constructor(name,age,email){
        super(name,age);
        this.email=email;
    }
    details(){
        console.log(`and this is my email ${this.email}`);
    }
}
const study = new student('teja',20,'teja@gmail.com');

study.get();
study.details();
    
