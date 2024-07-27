function generateReport() {
    const thElements = document.querySelectorAll('thead tr th');
    const trElements = document.querySelectorAll('tbody tr');
    const textareaElement = document.getElementById('output');

    let columns = [];
    for (const thElement of thElements) {
        const columnName = thElement.textContent.trim().toLowerCase();
        const checkbox = thElement.getElementsByTagName('input')[0];

        if (checkbox.checked) {
            columns.push({ columnName, checked: true, })
        } else {
            columns.push({ columnName, checked: false, })
        }
    }

    let output = [];

    for (const trElement of trElements) {
        const tdElements = trElement.getElementsByTagName('td');
        let objectToAdd = {};

        for (let i = 0; i < columns.length; i++) {
            const currentColumn = columns[i];

            if (currentColumn.checked) {
                objectToAdd[currentColumn.columnName] = tdElements[i].textContent;
            }
        }

        output.push(objectToAdd);
    }

    textareaElement.value = JSON.stringify(output, null, 2);
}
