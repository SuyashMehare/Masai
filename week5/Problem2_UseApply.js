function multiplyNumbers (arg1, arg2) {
    return arg1 * arg2;
}


let res = multiplyNumbers.apply(null, [4,4])
console.log(res);