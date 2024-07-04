function revealWords(words, text) {
    const regex = /\*+/g//;
    let wordsArr = words.split(', ');
    let matches = text.match(regex); 
    
    for (const match of matches) {
        for (const word of wordsArr) {
            if (match.length == word.length) {
                text = text.replace(match, word);
                break;
            }
        }
    }

    console.log(text);
}

revealWords('learning, great',
'softuni is ***** place for ******** new programming languages'
);