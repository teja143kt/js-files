class studentdetails{
    constructor(name,age,gender,phone,email,course,marks){
        this.name=name;
        this.age=age;
        this.age=gender;
        this.phone=phone;
        this.email=email;
        this.course=course;
        this.marks=marks;
    }
    getdetails(){
        console.log(`name:${this.name},age:${this.age},phone:${this.phone},eamil:${this.email},course:${this.course},marks:${this.marks}`)
    }
}
const student = new studentdetails('teja',20,'male',7095171551,'tejakutchu@gmsil.com','bsc(cmp)',90);

console.log(student.getdetails());