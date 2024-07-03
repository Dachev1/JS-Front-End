function censoredWords(text, word) {
    console.log(text.replaceAll(word, '*'.repeat(word.length)));
}

censoredWords('A small sentence with some words', 'small')