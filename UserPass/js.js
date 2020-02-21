/*
let stud1 = {name:"Asdf", section:"2ith", age:10};
let stud2 = {name:"Fdsa", section:"2ita", age:20};

function dis() {
    alert(`${this.name}, ${this.age} is enrolled in section ${this.section}.`);
}
let d = dis.bind(stud1);

d();

function stud(name, age) {
    this.name = name;
    this.age = age; 
}

stud.prototype.school = "UST";
stud.prototype.study = function(subject) { alert(`${this.name} is enrolled in ${subject} at `+
    `${this.school}.`)};
let stud1 = new stud("Asdf",10); 
let stud2 = new stud("Fdsa",20); 

stud1.study("ics202020");
*/

var st = {fname:"juan",};
var det = [21, "IT"]

var displayName = function(age, course) {
    alert(`${this.fname}, ${age} is taking ${course}.`);
}
displayName.apply(st, det);