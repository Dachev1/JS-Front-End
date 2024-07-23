function colorize() {
    const trElements = document.querySelectorAll('table tr:nth-child(even):not(:first-child)');

    for (const trElement of trElements) {
        trElement.style.background = 'teal';
    }
}
