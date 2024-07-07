// Try to do this WITHOUT multiplying the 3 numbers.

function signCheck(a, b, c) {
    function multiply (a, b) {
        return a * b;
    }

    if (multiply(multiply(a, b), c) > 0) {
        console.log('Positive'); 
    } else {
        console.log('Negative');
    }
}

signCheck(5, 15, -12);