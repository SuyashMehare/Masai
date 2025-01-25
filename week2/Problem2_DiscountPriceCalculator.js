function calculateDiscountedPrice(price){
    if(price < 0){
        console.log("Invalid price, the price must be a non-negative number.")
        return;
    }

    let discount = 0.1;

    if(price > 20){
        let availedDiscount = discount*price;
        let finalPrice = price - availedDiscount;
        console.log(`The final price of the item is: ${finalPrice}`)
    }else{
        console.log(`The final price of the item is: ${price}`)
    }

}

calculateDiscountedPrice(25)
calculateDiscountedPrice(20)
calculateDiscountedPrice(15)
calculateDiscountedPrice(-1)