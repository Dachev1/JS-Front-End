function solve(numbersArr) {
    let sum = 0;

    for (const number of numbersArr) {
        if (number % 2 === 0) {
            sum += number;
        } else {
            sum -= number;
        }
    }

    console.log(sum);
}

solve([1,2,3,4,5,6]);