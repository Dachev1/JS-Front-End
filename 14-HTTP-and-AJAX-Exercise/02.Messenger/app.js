function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/messenger';
    const authorNameElement = document.querySelector('input[name=author]');
    const contentElement = document.querySelector('input[name=content]');

    const sendButtonElement = document.getElementById('submit');
    sendButtonElement.addEventListener('click', sendMsg);

    const refreshButtonElement = document.getElementById('refresh');
    refreshButtonElement.addEventListener('click', refreshChat);

    async function sendMsg(e) {
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                author: authorNameElement.value,
                content: contentElement.value,
            })
        })
            .then(() => {
                authorNameElement.value = '';
                contentElement.value = '';
            });
    }

    async function refreshChat(e) {
        const textareaElement = document.getElementById('messages');
        const allMessagesResponse = await fetch(baseUrl)
        const messages = await allMessagesResponse.json();

        textareaElement.textContent = '';
        const chat = [];
        Object.values(messages)
            .forEach(message => {
                chat.push(`${message.author}: ${message.content}`);
            })

        textareaElement.textContent = chat.join('\n');
    }
}

attachEvents();
