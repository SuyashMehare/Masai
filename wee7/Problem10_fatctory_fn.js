function createCar (make, model, year) {
    if(!make || !model || !year) {
        console.log("Provide all details")
        return;
    }

    let obj = {}
    obj.make = make
    obj.model = model
    obj.year = year

    obj.describeCar = function () {
        console.log(`This car is a ${obj.year} ${obj.make} ${obj.model}.`);
    }

    return obj;
}

const car = createCar("Toyota", "Camry", 2022);
car.describeCar();
// Output: This car is a 2022 Toyota Camry.
