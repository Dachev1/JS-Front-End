function solve(input) {
    let shelfs = {};

    for (const line of input) {
        if (line.includes('->')) {
            const shelfId = line.split(' -> ')[0];
            const shelfGenre = line.split(' -> ')[1];

            if (!shelfs.hasOwnProperty(shelfId)) {
                shelfs[shelfId] = {
                    shelfGenre,
                    books: [],
                }
            }
        } else {
            const bookTitle = line.split(': ')[0];
            const bookAuthor = line.split(': ')[1].split(', ')[0];
            const bookGenre = line.split(': ')[1].split(', ')[1];

            let findShelf = Object.values(shelfs).find(shelf => shelf.shelfGenre === bookGenre);

            if (findShelf) {
                findShelf.books.push({
                    bookTitle,
                    bookAuthor
                })
            }
        }
    }


    let sortedByCountOfBooks = Object.entries(shelfs).sort((a, b) => b[1].books.length - a[1].books.length);

    for (const [id, shelf] of sortedByCountOfBooks) {
        const { shelfGenre, books } = shelf;

        console.log(`${id} ${shelfGenre}: ${books.length}`);
        let sortedByBookTitles = Object.entries(books)
            .sort((a, b) => a[0].localeCompare(b[0]));

        for (const [_, book] of sortedByBookTitles) {
            const { bookTitle, bookAuthor } = book;

            console.log(`--> ${bookTitle}: ${bookAuthor}`);
        }
    }
}
