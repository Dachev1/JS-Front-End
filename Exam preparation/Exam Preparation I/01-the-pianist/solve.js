function solve(input) {
    const n = input.shift();

    const pieces = [];
    for (let i = 0; i < n; i++) {
        const [piece, composer, key] = input.shift().split('|');

        pieces.push({ piece, composer, key, })
    }

    for (const command of input) {
        if (command.includes('Add')) {
            const [_, piece, composer, key] = command.split('|');

            const searchedPiece = getPiece(piece);

            if (!searchedPiece) {
                pieces.push({ piece, composer, key, })
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }
        } else if (command.includes('Remove')) {
            const [_, piece] = command.split('|');

            const searchedPiece = getPiece(piece);

            if (searchedPiece) {
                pieces.splice(pieces.indexOf(searchedPiece), 1);
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command.includes('ChangeKey')) {
            const [_, piece, newKey] = command.split('|');

            const searchedPiece = getPiece(piece);

            if (!searchedPiece) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            } else {
                searchedPiece.key = newKey;

                console.log(`Changed the key of ${piece} to ${newKey}!`);
            }
        }
    }

    pieces.forEach(curr => {
        console.log(`${curr.piece} -> Composer: ${curr.composer}, Key: ${curr.key}`);
    })

    function getPiece(piece) {
        return pieces.find(curr => curr.piece === piece);
    }
}
