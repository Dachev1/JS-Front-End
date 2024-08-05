window.addEventListener("load", solve);

function solve() {
    //form element
    const formElement = document.querySelector('.expense-content');
    // input elements
    const typeInputElement = document.getElementById('expense');
    const numberInputElement = document.getElementById('amount');
    const dateInputElement = document.getElementById('date');

    // list element
    const previewUlelement = document.getElementById('preview-list');
    const expensesUlelement = document.getElementById('expenses-list');

    // button element
    const addButtonElement = document.getElementById('add-btn');
    const deleteButtonElement = document.querySelector('.delete');

    addButtonElement.addEventListener('click', onAdd);
    function onAdd(e) {
        e.preventDefault();

        const type = typeInputElement.value;
        const number = numberInputElement.value;
        const date = dateInputElement.value;

        if (type === '' || number === '' || date === '') {
            return;
        }

        const typeParaElement = document.createElement('p');
        typeParaElement.textContent = `Type: ${type}`;

        const numberParaElement = document.createElement('p');
        numberParaElement.textContent = `Amount: ${number}$`;

        const dateParaElement = document.createElement('p');
        dateParaElement.textContent = `Date: ${date}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(typeParaElement);
        articleElement.appendChild(numberParaElement);
        articleElement.appendChild(dateParaElement);

        const editButtonElement = document.createElement('button');
        editButtonElement.addEventListener('click', onEdit);
        editButtonElement.classList.add('btn', 'edit');
        editButtonElement.textContent = 'edit';

        const okButtonElement = document.createElement('button');
        okButtonElement.addEventListener('click', onOk);
        okButtonElement.classList.add('btn', 'ok');
        okButtonElement.textContent = 'ok';

        const divElement = document.createElement('div');
        divElement.classList.add('buttons');
        divElement.appendChild(editButtonElement);
        divElement.appendChild(okButtonElement);

        const liElement = document.createElement('li');
        liElement.classList.add('expense-item');
        liElement.appendChild(articleElement);
        liElement.appendChild(divElement);

        previewUlelement.appendChild(liElement);

        formElement.reset();

        addButtonElement.disabled = true;

        function onEdit() {
            typeInputElement.value = type;
            numberInputElement.value = number;
            dateInputElement.value = date;

            previewUlelement.removeChild(liElement);

            addButtonElement.disabled = false;
        }

        function onOk() {
            previewUlelement.removeChild(liElement);
            liElement.removeChild(divElement);
            expensesUlelement.appendChild(liElement);
            deleteButtonElement.addEventListener('click', onDelete);
        }

        function onDelete(e) {
            location.reload;
        }
    }
}
