function Animal() {
    this.type = "Animal"
}

Animal.prototype.sound = function () {
    console.log("Animal sound");
}

function Dog() { }

Dog.prototype = Object.create(Animal)

Dog.prototype.sound = function () {
    console.log("Bark");
}

const myDog = new Dog();
myDog.sound()
console.log(myDog);
