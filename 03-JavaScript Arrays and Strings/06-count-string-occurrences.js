function countOccurrences(text, searchedWord) {
    const words = text.split(' ');
    let counter = 0;

    for (const word of words) {
        if (word === searchedWord) {
            counter++;
        }
    }

    console.log(counter);
}

countOccurrences('This is a word and it also is a sentence', 'is')