function calcArea(base = 0, height = 0) {

    if(base < 0 || height < 0){
        console.log("Invalid number, base and height must be positive numbers.");
        return;
    }

    let area = (base*height)/2;
    console.log(`The area of the triangle is: ${area}`);
}

calcArea(4,5);
calcArea(0,0);
calcArea(1,-1);
calcArea(-1,1);