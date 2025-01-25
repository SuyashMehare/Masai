function calculateBMI(w, h) {
    if(h == 0){
        console.log(`Invalid input, height cannot be zero.`);
        return;
    }

    if (w < 0 || h < 0) {
        console.log("Invalid input, height and weight must be positive numbers.");
        return;
    }

    let bmi = w/(h*h);
    console.log(`Your BMI is: ${bmi.toFixed(2)}.`);
}

calculateBMI(70, 1.75)
calculateBMI(55, 1.60)
calculateBMI(90, 1.80)
calculateBMI(22, 0)
calculateBMI(22, -1)
calculateBMI(-1, 1)
