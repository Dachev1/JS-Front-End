function extractText() {
    const ulElement = document.getElementById('items');
    const ulInText =  ulElement.innerText

    document.getElementById('result').textContent = ulInText;
}
