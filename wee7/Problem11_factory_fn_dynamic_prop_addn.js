function createInventoryItem (name, category, price) {
    let obj = {};
    obj.name = name;
    obj.category = category;
    obj.price = price;

    obj.describeItem = function () {
        console.log(`Item: ${this.name}, Category: ${this.category}, Price: ${this.price}`);
    }
    return obj;
}


function addItemDiscount(inventoryItem, discountPercent) {
    let obj = {};
    
    obj.inventoryItem = inventoryItem;
    obj.discountPercent = discountPercent;
    obj.discountedPrice = (inventoryItem.price*discountPercent)/100

    obj.applyDiscount = function () {
        let price = this.inventoryItem.price - this.discountedPrice
        console.log(`Discounted Price for Laptop: ${price}`)
    }

    return obj;
}


const item = createInventoryItem("Laptop", "Electronics", 1500);
item.describeItem();
// Output: Item: Laptop, Category: Electronics, Price: 1500

const discountedItem = addItemDiscount(item, 10);
discountedItem.applyDiscount();
// Output: Discounted Price for Laptop: 1350
