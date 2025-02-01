function Person (name, age) {
    this.name = name;
    this.age = age;

    this.displayInfo = function () {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

    this.bindInfo = this.displayInfo.bind(this);
}

const fn = new Person("Alice", "55");

fn.bindInfo()