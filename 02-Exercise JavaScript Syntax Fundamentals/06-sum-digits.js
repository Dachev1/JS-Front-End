function sumDigits(number) {
    let digitsSum = 0;

    while (number > 0) {
        digitsSum += Math.trunc(number % 10);
        number /= 10;
    }

    console.log(digitsSum);
}

sumDigits(97561);