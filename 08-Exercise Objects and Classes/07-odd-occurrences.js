function oddOccurrences(input) {
    let words = input.toLowerCase().split(' ');
    let wordsCounter = {};
    
    for (const word of words) {
        if (!wordsCounter.hasOwnProperty(word)) {
            wordsCounter[word] = 0;
        }
        
        wordsCounter[word]++;
    }
    
    let result = Object.keys(wordsCounter).filter((word) => wordsCounter[word] % 2 !==0);
    
    console.log(result.join(' '));
}
