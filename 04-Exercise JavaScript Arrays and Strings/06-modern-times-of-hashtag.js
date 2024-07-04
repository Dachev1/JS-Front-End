function solve(text) {
    const regex = /#[A-Za-z]+/g//;

    let matchedWords = text.match(regex);

    for (const word of matchedWords) {
        console.log(word.slice(1));
    }
}

solve('The symbol # is known #variously in English-speaking #regions as the #number sign');