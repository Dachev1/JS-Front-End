const baseUrl = 'http://localhost:3030/jsonstore/tasks';

// Input fields
const locationInputElement = document.getElementById('location');
const temperatureInputElement = document.getElementById('temperature');
const dateInputElement = document.getElementById('date');

// Buttons
const loadButton = document.getElementById('load-history');
loadButton.addEventListener('click', load);

const addButton = document.getElementById('add-weather');
addButton.addEventListener('click', add);

async function load() {
    const response = await fetch(baseUrl);
    const weatherData = await response.json();

    const records = Object.values(weatherData)
        .map(record => createRecordElement(record.location, record.temperature, record.date, record._id));

    const list = document.getElementById('list');
    list.innerHTML = '';
    list.append(...records);
}

function add() {
    const location = locationInputElement.value;
    const temperature = temperatureInputElement.value;
    const date = dateInputElement.value;

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            location,
            temperature,
            date,
        })
    }).then(() => {
        clearInputFields();
        load();
    })
}


function createRecordElement(location, temperature, date, id) {
    const locationH2Element = document.createElement('h2');
    locationH2Element.textContent = location;

    const dateH3Element = document.createElement('h3');
    dateH3Element.textContent = date;

    const temperatureH3Element = document.createElement('h3');
    temperatureH3Element.id = 'celsius';
    temperatureH3Element.textContent = temperature;

    const divElement = document.createElement('div');
    divElement.classList.add('container');
    divElement.append(locationH2Element, dateH3Element, temperatureH3Element, createButtons(location, temperature, date, id, divElement));

    return divElement;
}

function createButtons(location, temperature, date, id, divElement) {
    const changeButtonElement = document.createElement('button');
    changeButtonElement.classList.add('change-btn');
    changeButtonElement.textContent = 'Change';
    changeButtonElement.addEventListener('click', change);

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList.add('delete-btn');
    deleteButtonElement.textContent = 'Delete';
    deleteButtonElement.addEventListener('click', deleteRecord);

    const div = document.createElement('div');
    div.classList.add('buttons-container');
    div.append(changeButtonElement, deleteButtonElement);

    return div;

    function change() {
        locationInputElement.value = location;
        temperatureInputElement.value = temperature;
        dateInputElement.value = date;

        divElement.remove();

        addButton.setAttribute('disabled', 'disabled');

        const editButton = document.getElementById('edit-weather');
        editButton.removeAttribute('disabled');
        editButton.addEventListener('click', edit);

        function edit() {
            fetch(`${baseUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    location: locationInputElement.value,
                    temperature: temperatureInputElement.value,
                    date: dateInputElement.value,
                    _id: id,
                })
            }).then(() => {
                addButton.removeAttribute('disabled');
                editButton.setAttribute('disabled', 'disabled');

                clearInputFields();
                load();
            })

        }
    }

    function deleteRecord() {
        fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
        }).then(divElement.remove());
    }
}

function clearInputFields() {
    locationInputElement.value = '';
    temperatureInputElement.value = '';
    dateInputElement.value = '';
}
