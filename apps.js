function sumOfDigits(number) {
    const  numStr = number.toString();
    let sum = 0;

    for (let i = 0; i < numStr.lenght; i++) {
       sum += parseInt(numStr[i], 10);
    }
    return sum;
}

const number = 57103;
const result = sumOfDigits(number);
console.log(result);


