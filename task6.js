class student{
    #fees;
    constructor(name,age,course){
        this.name=name;
        this.age=age;
        this.course=course;
        this.#fees=0;
    }
    setfees(fees){this.#fees =fees;}
    getfees(){ return this.#fees;}   
    #internalfee() { return this.#fees; }
    calcultefinalfees() { return this.#internalfee() };
}
class schoolstudent extends student{
    getdetails(){ return `name:${this.name},age:${this.age},course:${this.course},amount:${this.calcultefinalfees()}`;}
}
class collegestudent extends student{
    getdetails(){ return `name:${this.name},age:${this.age},course:${this.course},amount:${this.calcultefinalfees()}`;}
}

const s1 = new schoolstudent('teja',21,'bsc')  ;
const s2 = new collegestudent('akhil',20,'bsc cmp')  ;

s1.setfees(2000);
console.log(s1.getdetails());

s2.setfees(25000);
console.log(s2.getdetails());


