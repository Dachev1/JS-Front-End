function charactersInRange(firstChr, secondChr) {
    let start = 0;
    let end = 0;
    
    if (firstChr.charCodeAt(0) > secondChr.charCodeAt(0)) {
        start = secondChr.charCodeAt(0) + 1;
        end = firstChr.charCodeAt(0);
    } else {
        start = firstChr.charCodeAt(0) + 1;
        end = secondChr.charCodeAt(0);
    }
    
    let output = [];
    
    for (let i = start; i < end; i++) {
        output.push(String.fromCharCode(i))
    }
    
    console.log(output.join(' '));
}