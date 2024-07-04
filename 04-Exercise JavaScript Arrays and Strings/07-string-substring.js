function substring(word, str) {
    const isWordIncluded = str.toLowerCase().split(' ').includes(word.toLowerCase());

    if (isWordIncluded) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

substring('javascript',
'JavaScript is the best programming language'
)