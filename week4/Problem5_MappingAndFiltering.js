function processProducts(products = []) {
    let names = products.map(val => val.name);
    products.forEach((value) => {
        if(value.price > 50) {
            console.log(`${value.name} is above $50`);
        }
        else if(value.price < 50){
            console.log(`${value.name} is below $50`);
        }
    })
}

// processProducts([{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }])