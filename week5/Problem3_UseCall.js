let info = {
    name: "Alice",
    age: 43
}

function personInfo() {
    console.log(`The age of ${this.name} is ${this.age}`);
}

personInfo.call(info)