function palindromes(numbers) {
    
    for (let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i];
        const reversedNumber = (
            currentNumber
            .toString()
            .split('')
            .reverse()
            .join('')
        )  * Math.sign(currentNumber);
        
        if (currentNumber === reversedNumber) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

palindromes([123,323,421,121]);