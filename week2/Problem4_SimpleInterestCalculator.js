function calculateIntrest(p, r, t) {
    
    if(p < 0 || r < 0 || t < 0){
        console.log("Invalid input, all values must be non-negative.");
        return;
    }
    
    let intrest = (p*r*t)/100;
    console.log(`The simple interest is: ${intrest.toFixed(1)}`);
}

calculateIntrest(1000, 5, 3)
calculateIntrest(1500, 7, 5)
calculateIntrest(0, 6, 2)
calculateIntrest(6, 0, 2)
calculateIntrest(6, 2, 0)