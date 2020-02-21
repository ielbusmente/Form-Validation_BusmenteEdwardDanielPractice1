class person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    walk(distance) {
        alert(`${this.name} walks ${distance} miles per day.`);
    }
}

class stud extends person {
    constructor(name, gender, course){
        super(name, gender);
        this.course = course;
    }
    study(sub) {
        alert(`${this.name} is enrolled in ${sub}.`);
    }
}

var std1 = new stud("Daniel", "Male", "IT");
var p1 = new person("Joyce", "Female");
console.log(typeof(p1));
p1 = 3;
console.log(typeof(p1));
//polymorph ability of an object to take on many forms. The most common use of polymorphism in OOP occurs when a parent class reference is used to refer to a child class object. 