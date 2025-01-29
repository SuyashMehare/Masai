function factorial(num = 0) {
    if (num < 0 || !(typeof num === "number")) {
        console.log("Invalid input");
        return;
    }
    
    if(num <= 1) return 1;

    return factorial(num-1) + factorial(num-2)
}
