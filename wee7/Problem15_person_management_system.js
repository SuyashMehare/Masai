function Person (name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
}

function Employee (name, age, jobTitle) {
    Person.call(this, name, age)
    this.jobTitle = jobTitle;
    // this.__proto__ = Person
}

Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
}

let person = new Person("Jack", 34);
let emp = new Employee("aman",45, "dev");


person.introduce()
emp.introduce()
emp.work()