class studentdetails {
    let_marks = 20;

    constructor(name, age, gender, phone, marks) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.phone = phone;
        this._marks = marks

        if (marks >= 0 && marks <= 100) {
            this._marks = marks;
        }
        else {
            this._marks = 0;
            console.log('fill in the invalid value');
        }
    }
    getdetails() {
        console.log(`name:${this.name}`);
        console.log(`age:${this.age}`);
        console.log(`gender:${this.gender}`);
        console.log(`phone:${this.phone}`);
        console.log(`marks:${this._marks}`);
    }
}
const student = new studentdetails('teja', 20, 'male', 54646, 42);

student.getdetails();
