// Solve this task without using any conditional statements (no if or switch statements or ternary operators).

function calculator(a, b, operator) {
    const operators = {
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b,  
        add: (a, b) => a + b, 
        subtract: (a, b) => a - b
    }

    console.log(operators[operator](a, b));
}

calculator(5, 5, 'multiply')