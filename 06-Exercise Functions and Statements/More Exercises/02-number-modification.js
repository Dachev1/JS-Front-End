function numberModification(number) {
    let numberToString = String(number);
    let isAverageSumOfDigitsIsBelow5 = true;

    let average = getSumOfDigits(number) / numberToString.length;

    if (average > 5) {
        return numberToString;
    }

    while (isAverageSumOfDigitsIsBelow5) {
        numberToString += 9;

        average = getSumOfDigits(parseInt(numberToString)) / numberToString.length;

        if (average > 5) {
            isAverageSumOfDigitsIsBelow5 = false;
        }
    }

    return numberToString;
}

function getSumOfDigits(number) {
    let digitsSum = 0;

    while (number > 0) {
        digitsSum += number % 10;
        
        number = Math.floor(number / 10);
    }

    return digitsSum;
}

