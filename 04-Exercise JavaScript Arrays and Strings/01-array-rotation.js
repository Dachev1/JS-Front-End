function arrayRotation(numbersArr, rotationsCount) {
    for (let i = 0; i < rotationsCount; i++) {
        // let firstElement = numbersArr[0];
        // for (let j = 0; j < numbersArr.length - 1; j++) {
        //     numbersArr[j] = numbersArr[j + 1];
        // }

        // numbersArr[numbersArr.length - 1] = firstElement+
        let firstNumber = numbersArr.shift();
        numbersArr.push(firstNumber);
    }

    console.log(numbersArr.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);
