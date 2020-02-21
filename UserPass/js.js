let stud1 = {name:"Asdf", section:"2ith", age:10};
let stud2 = {name:"Fdsa", section:"2ita", age:20};

function dis() {
    alert(`${this.name}, ${this.age} is enrolled in section ${this.section}.`);
}
let d = dis.bind(stud1);

d();