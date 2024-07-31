function addItem() {
    const selectElement = document.getElementById('menu');
    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');

    const optionElement = document.createElement('option');
    optionElement.textContent = newItemText.value;
    optionElement.value = newItemValue.value;

    selectElement.appendChild(optionElement);
    newItemText.value = '';
    newItemValue.value = '';
}
