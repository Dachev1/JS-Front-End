function pascalCaseSplitter(str) {
    const regex = /[A-Z][a-z]*/g//;
    let matchedWords = str.match(regex);

   console.log(matchedWords.join(', '));
}

pascalCaseSplitter('ThisIsSoAnnoyingToDo');