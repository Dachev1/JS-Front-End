const baseUrl = 'http://localhost:3030/jsonstore/tasks';

// Input fields
const nameInputElement = document.getElementById('name');
const daysInputElement = document.getElementById('num-days');
const dateInputElement = document.getElementById('from-date');

// Buttons
const loadButton = document.getElementById('load-vacations');
loadButton.addEventListener('click', load);

const addButton = document.getElementById('add-vacation');
addButton.addEventListener('click', add);

async function load() {
    const response = await fetch(baseUrl);
    const coursesData = await response.json();

    const courses = Object.values(coursesData)
        .map(course => createCourseElement(course.name, course.days, course.date, course._id));
        
    const list = document.getElementById('list');
    list.innerHTML = '';
    list.append(...courses);
}

function add() {
    const name = nameInputElement.value;
    const days = daysInputElement.value;
    const date = dateInputElement.value;

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            name,
            days,
            date,
        })
    }).then(() => {
        clearInputFields();
       load();
       
    })
}


function createCourseElement(name, days, date, id) {
    const nameH2Element = document.createElement('h2');
    nameH2Element.textContent = name;

    const daysH3Element = document.createElement('h3');
    daysH3Element.textContent = days;

    const dateH3Element = document.createElement('h3');
    dateH3Element.textContent = date;

    const divElement = document.createElement('div');
    divElement.classList.add('container');
    divElement.append(nameH2Element, daysH3Element, dateH3Element, createButtons(name, days, date, id, divElement));

    return divElement;
}

function createButtons(name, days, date, id, divElement) {
    const changeButtonElement = document.createElement('button');
    changeButtonElement.classList.add('change-btn');
    changeButtonElement.textContent = 'Change';
    changeButtonElement.addEventListener('click', change);

    const doneButtonElement = document.createElement('button');
    doneButtonElement.classList.add('done-btn');
    doneButtonElement.textContent = 'Done';
    doneButtonElement.addEventListener('click', deleteCourse);

    const fragment = document.createDocumentFragment();
    fragment.append(changeButtonElement, doneButtonElement);

    return fragment;

    function change() {
        nameInputElement.value = name;
        daysInputElement.value = days;
        dateInputElement.value = date;

        divElement.remove();

        addButton.setAttribute('disabled', 'disabled');

        const editButton = document.getElementById('edit-vacation');
        editButton.removeAttribute('disabled');
        editButton.addEventListener('click', edit);

        function edit() {
            fetch(`${baseUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    name: nameInputElement.value,
                    days: daysInputElement.value,
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

    function deleteCourse() {
        fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
        }).then(divElement.remove());
    }
}

function clearInputFields() {
    nameInputElement.value = '';
    daysInputElement.value = '';
    dateInputElement.value = '';
}
