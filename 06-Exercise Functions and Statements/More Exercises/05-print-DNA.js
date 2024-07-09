function printDNA(requiredHelixLength) {
    const symbols = 'ATCGTTAGGG'.split('');
    
    const printPattern = {
        1: (symbol1, symbol2) => console.log(`**${symbol1}${symbol2}**`),
        2: (symbol1, symbol2) => console.log(`*${symbol1}--${symbol2}*`),  
        3: (symbol1, symbol2) => console.log(`${symbol1}----${symbol2}`), 
        4: (symbol1, symbol2) => console.log(`*${symbol1}--${symbol2}*`)
    };
    
    let currentIndex = 0;
    let currentPattern = 1;
    let lastPatternNumber = 4;
    let firstPatternNumber = 1; 
    
    while (requiredHelixLength > 0) {
        
        if (currentIndex >= symbols.length - 1) {
            currentIndex = 0;
        }
        
        let symbol1 = symbols[currentIndex];
        let symbol2 = symbols[currentIndex + 1];
        
        printPattern[currentPattern](symbol1, symbol2);
        
        
        if (currentPattern === lastPatternNumber) {
            currentPattern = firstPatternNumber;
        } else {
            currentPattern++;
        }
        
        currentIndex += 2;
        requiredHelixLength--;
    }
}
