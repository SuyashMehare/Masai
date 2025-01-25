function largeNumberIndetifier(number1, number2){

    if(number1 > number2){
        console.log(`${number1} is larger than ${number2}`)
    }
    else if(number2 > number1){
        console.log(`${number2} is larger than ${number1}`)
    }
    else{
        console.log("Both numbers are equal")
    }
}

largeNumberIndetifier(5, 10)
largeNumberIndetifier(7, 7)
largeNumberIndetifier(-1, -10)
