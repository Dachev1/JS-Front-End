function sameNumbers(number) {
    let sumOfDigits = 0;
    let isSame = true;
    let digit;
    let lastAddedDigit = number % 10;

    while (number > 0) {
        digit = Math.trunc(number % 10);

        if (digit != lastAddedDigit) {
            isSame = false
        }

        sumOfDigits += digit;
        number = Math.trunc(number / 10);
        lastAddedDigit = digit
    }

    console.log(isSame);
    console.log(sumOfDigits);
}

sameNumbers(2222222);