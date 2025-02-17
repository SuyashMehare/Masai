function Car (make, model, year, isAvailable = true) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable;
}

function Customer(name, rentedCars=[]) {
    this.name = name;
    this.rentedCars = rentedCars;
}

Customer.prototype.rentCar = function(carObj) {
    if(!carObj.isAvailable) {
        console.log("car is already rented.");
        return;
    }
    
    carObj.isAvailable = false;
    this.rentedCars.push(carObj);
}

function PremiumCustomer (carObj, discountRate) {
    
}