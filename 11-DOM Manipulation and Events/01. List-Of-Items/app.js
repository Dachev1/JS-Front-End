function addItem() {
    const ulElement = document.getElementById('items');
    const inputElement = document.getElementById('newItemText');

    let li = document.createElement('li');
    li.textContent = inputElement.value;

    ulElement.appendChild(li);

    inputElement.value = '';
}
