function wordsUppercase(str) {
    let regex = /\w+|\((.*?)\)/g;
    let match;
    let res = [];
    
    while (match = regex.exec(str)) {
        res.push(match[1] || match[0]);
    }
    
    let outputText = String (res.join(', '));
    
    console.log(outputText.toUpperCase());
}

wordsUppercase('Functions in JS can be nested, i.e. hold other functions');