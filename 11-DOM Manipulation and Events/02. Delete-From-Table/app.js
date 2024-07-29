function deleteByEmail() {
    const searchedEmail = document.querySelector('label input');
    const emails = document.querySelectorAll('table#customers tbody tr td:nth-child(2)');
    const resultElement = document.getElementById('result');

    for (const email of emails) {
        if (email.textContent === searchedEmail.value) {
            email.parentNode.remove();
            resultElement.textContent = 'Deleted.'

            // clear the input field
            searchedEmail.value = '';
            return;
        }
    }

    resultElement.textContent = 'Not found.';
}
