const baseUrl = 'http://localhost:3030/jsonstore/records';

const ulElement = document.getElementById('list');

const nameField = document.getElementById('p-name');
const stepsField = document.getElementById('steps');
const caloriesField = document.getElementById('calories');

const loadButtonElement = document.getElementById('load-records');
loadButtonElement.addEventListener('click', load);

const addButtonElement = document.getElementById('add-record');
addButtonElement.addEventListener('click', add);

function load() {
    fetch(baseUrl)
        .then(response => response.json())
        .then(data => createRecord(data));


    function createRecord(recordData) {
        ulElement.innerHTML = '';

        Object.values(recordData)
            .forEach(record => {
           
                const divElement = document.createElement('div');
                divElement.classList.add('info');
                divElement.appendChild(createParagraph(record.name))
                divElement.appendChild(createParagraph(record.steps))
                divElement.appendChild(createParagraph(record.calories))

                const liElement = document.createElement('li');
                liElement.classList.add('record');
                liElement.appendChild(divElement);
                liElement.appendChild(buttonElements(record.name, record.steps, record.calories, record._id, liElement));

                ulElement.appendChild(liElement);
            });
    }
}

function add(e) {
    e.preventDefault();

    const name = nameField.value;
    const steps = stepsField.value;
    const calories = caloriesField.value;

    if (name === '' || steps === '' || calories === '') {
        return;
    }

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            steps,
            calories,
        }),
    })
        .then(() => {
            clearAllInputs();
            load();
            document.querySelector('form').reset();
        })
}

function buttonElements(name, steps, calories, id, liElement) {
    const changeButtonElement = document.createElement('button');
    changeButtonElement.classList.add('change-btn');
    changeButtonElement.textContent = 'Change';
    changeButtonElement.addEventListener('click', change)

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList.add('delete-btn');
    deleteButtonElement.textContent = 'Delete';
    deleteButtonElement.addEventListener('click', deleteRecord)

    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('btn-wrapper');
    buttonWrapper.appendChild(changeButtonElement);
    buttonWrapper.appendChild(deleteButtonElement);

    return buttonWrapper;

    function change() {
        nameField.value = name;
        stepsField.value = steps;
        caloriesField.value = calories;

        addButtonElement.setAttribute('disabled', 'true');

        const editButtonElement = document.getElementById('edit-record');
        editButtonElement.removeAttribute('disabled');

        editButtonElement.addEventListener('click', () => {
            fetch(`${baseUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: nameField.value,
                    steps: stepsField.value,
                    calories: caloriesField.value,
                }),
            })
                .then(() => {
                    clearAllInputs();
                    load();
                    id = null;
                    addButtonElement.removeAttribute('disabled');
                })
        })
    }

    function deleteRecord() {
        fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
        })
            .then(liElement.remove());
    }
}

function clearAllInputs() {
    nameField.value = '';
    stepsField.value = '';
    caloriesField.value = '';
}

function createParagraph(value) {
    const pElement = document.createElement('p');
    pElement.textContent = value;

    return pElement;
}
