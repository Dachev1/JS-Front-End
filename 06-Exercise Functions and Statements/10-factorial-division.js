function factorialDivision(a, b) {

    function getFactorial(number) {
        if (number <= 1) {
            return 1;
        } else {
            return (number * getFactorial(number -1))
        }
    }

    console.log((getFactorial(a) / getFactorial(b)).toFixed(2));
}

factorialDivision(5, 2);