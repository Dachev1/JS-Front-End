function solve() {
    const text = document.getElementById('input').value;
    const output = document.getElementById('output');

    const sentences = Array.from(text.split('.'))
        .filter(Boolean)
        .reduce((result, sentence, i) => {
            const indexToAddSentence = Math.trunc(i / 3);

            if (!result[indexToAddSentence]) {
                result[indexToAddSentence] = [];
            }

            result[indexToAddSentence].push(`${sentence.trim()}.`);

            return result;
        }, []);

    sentences.forEach(sentence => {
        let paragraph = document.createElement('p');
        paragraph.appendChild(document.createTextNode(sentence));
        output.appendChild(paragraph);
    })
}
