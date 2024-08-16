const baseUrl = 'http://localhost:3030/jsonstore/tasks';

// Input fields
const titleInputElement = document.getElementById('course-name');
const typeInputElement = document.getElementById('course-type');
const descriptionInputElement = document.getElementById('description');
const teacherInputElement = document.getElementById('teacher-name');

// Button elements
const loadButton = document.getElementById('load-course');
loadButton.addEventListener('click', load);

const addButton = document.getElementById('add-course');
addButton.addEventListener('click', add);

async function load() {
    const response = await fetch(baseUrl);
    const coursesData = await response.json();

    const courses = Object.values(coursesData).map(course => createCourseElement(course.title, course.type, course.description, course.teacher, course._id))

    const listElement = document.getElementById('list');
    listElement.innerHTML = '';
    listElement.append(...courses);
}

function add(e) {
    e.preventDefault();

    const title = titleInputElement.value;
    const type = typeInputElement.value;
    const description = descriptionInputElement.value;
    const teacher = teacherInputElement.value;

    clearInputFields();

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            title,
            type,
            description,
            teacher,
        })
    });

    load();
    document.querySelector('form').reset();
}

function createCourseElement(title, type, description, teacher, id) {
    const titleH2Element = document.createElement('h2');
    titleH2Element.textContent = title;

    const teacherH3Element = document.createElement('h3');
    teacherH3Element.textContent = teacher;

    const typeH3Element = document.createElement('h3');
    typeH3Element.textContent = type;

    const descriptionH4Element = document.createElement('h4');
    descriptionH4Element.textContent = description;

    const divElement = document.createElement('div');
    divElement.classList.add('container');
    divElement.append(
        titleH2Element,
        teacherH3Element,
        typeH3Element,
        descriptionH4Element,
        createButtonsElements(title, type, description, teacher, id, divElement)
    );

    return divElement;
}

function createButtonsElements(title, type, description, teacher, id, divElement) {
    const editButtonElement = document.createElement('button');
    editButtonElement.classList.add('edit-btn');
    editButtonElement.textContent = 'Edit Course';
    editButtonElement.addEventListener('click', edit);

    const finishButtonElement = document.createElement('button');
    finishButtonElement.classList.add('finish-btn');
    finishButtonElement.textContent = 'Finish Course';
    finishButtonElement.addEventListener('click', removeCourse)

    const fragmentElement = document.createDocumentFragment();
    fragmentElement.append(editButtonElement, finishButtonElement);

    return fragmentElement;

    // Buttons event
    function edit() {
        titleInputElement.value = title;
        typeInputElement.value = type;
        descriptionInputElement.value = description;
        teacherInputElement.value = teacher;

        divElement.remove();

        addButton.setAttribute('disabled', 'disabled');

        const editButton = document.getElementById('edit-course');
        editButton.removeAttribute('disabled');
        editButton.addEventListener('click', (e) => {
            e.preventDefault();

            fetch(`${baseUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    title: titleInputElement.value,
                    type: typeInputElement.value,
                    description: descriptionInputElement.value,
                    teacher: teacherInputElement.value,
                    _id: id,
                })
            }).then(() => {
                    editButton.setAttribute('disabled', 'disabled');
                    addButton.removeAttribute('disabled');

                    load();
                    document.querySelector('form').reset();
                })
        })
    }

    function removeCourse() {
        fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
        }).then(() => {
            divElement.remove();
            load();
        })
    }
}

function clearInputFields() {
    titleInputElement.value = '';
    typeInputElement.value = '';
    descriptionInputElement.value = '';
    teacherInputElement.value = '';
}
