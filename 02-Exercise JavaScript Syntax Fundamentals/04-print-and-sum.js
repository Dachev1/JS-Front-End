function printSum(startNumber, endNumber) {
    let sum = 0;
    let result = '';

    for (let i = startNumber; i <= endNumber; i++) {
        result += `${i} `;
        sum += i;
    }     

    console.log(result);
    console.log(`Sum: ${sum}`);
}

printSum(5, 10);