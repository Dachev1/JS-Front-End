function printGrade(grade) {

    const result = function formatGrade(grade) {
        if (grade < 3) {
            return console.log('Fail (2)');
        }
        
        if (grade < 3.50) {
            return console.log(`Poor (${grade.toFixed(2)})`);
        }
        
        if (grade < 4.50) {
            return console.log(`Good (${grade.toFixed(2)})`);
        }
        
        if (grade < 5.50) {
            return console.log(`Very good (${grade.toFixed(2)})`);
        }
        
        return console.log(`Excellent (${grade.toFixed(2)})`);
    }

    result(grade);
}

printGrade(2.99);
