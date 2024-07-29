function addItem() {
    const ulElement = document.getElementById('items');
    const newItemElement = document.getElementById('newItemText');

    if (newItemElement.value === '') {
        return;
    }

    const liElement = document.createElement('li');
    liElement.textContent = newItemElement.value;

    // creating delete button
    const aElement = document.createElement('a');
    aElement.textContent = '[Delete]'
    aElement.href = '#';

    // add remove event
    aElement.addEventListener('click', (e) => {
        aElement.parentNode.remove();
    })

    // adding a element into li element
    liElement.appendChild(aElement);

    // adding li element to the list
    ulElement.appendChild(liElement);

    newItemElement.value = '';
}
