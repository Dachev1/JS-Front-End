function encodeAndDecodeMessages() {
    const encodeTextareaElement = document.querySelector('textarea[placeholder="Write your message here..."]');
    const decodeTextareaElement = document.querySelector('textarea[placeholder="No messages..."]');

    const encodeButtonElement = document.querySelector('main#main div:nth-child(1) button');
    const decodeButtonElement = document.querySelector('main#main div:nth-child(2) button');

    function transform(textarea, operator, output) {
        let result = '';
        Array.from(textarea.value.split(''))
            .forEach(chr => {
                if (operator === '+') {
                    result += String.fromCharCode(chr.charCodeAt(0) + 1);
                } else {
                    result += String.fromCharCode(chr.charCodeAt(0) - 1);
                }
            })

        if (operator === '+') {
            output.value = result;
            textarea.value = '';
        } else {
            output.value = result;
        }
    };

    encodeButtonElement.addEventListener('click', () => {
        transform(encodeTextareaElement, '+', decodeTextareaElement);
    });

    decodeButtonElement.addEventListener('click', () => {
        transform(decodeTextareaElement, '-', decodeTextareaElement);
    });
}
