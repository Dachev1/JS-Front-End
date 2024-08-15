window.addEventListener("load", solve);

function solve() {
    // form element
    const formElement = document.querySelector('form');

    // input elements
    const placeInputElement = document.getElementById('place');
    const actionInputElement = document.getElementById('action');
    const personInputElement = document.getElementById('person');

    // ul elements
    const taskUlElement = document.getElementById('task-list');
    const doneUlElement = document.getElementById('done-list');

    // button elements
    const addButtonElement = document.getElementById('add-btn');

    addButtonElement.addEventListener('click', onAdd);

    function onAdd(еvent) {
        еvent.preventDefault;

        const place = placeInputElement.value;
        const action = actionInputElement.value;
        const person = personInputElement.value;

        if (place === '' || action === '' || person === '') {
            return;
        }

        const paraPlaceElement = document.createElement('p');
        paraPlaceElement.textContent = `Place:${place}`;

        const paraActionElement = document.createElement('p');
        paraActionElement.textContent = `Action:${action}`;

        const paraPersonElement = document.createElement('p');
        paraPersonElement.textContent = `Person:${person}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(paraPlaceElement);
        articleElement.appendChild(paraActionElement);
        articleElement.appendChild(paraPersonElement);

        const editButtonElement = document.createElement('button');
        editButtonElement.addEventListener('click', edit);
        editButtonElement.classList.add('edit');
        editButtonElement.textContent = 'Edit';

        const doneButtonElement = document.createElement('button');
        doneButtonElement.addEventListener('click', done);
        doneButtonElement.classList.add('done');
        doneButtonElement.textContent = 'Done';

        const divElement = document.createElement('div');
        divElement.classList.add('buttons');
        divElement.appendChild(editButtonElement);
        divElement.appendChild(doneButtonElement);

        const liElement = document.createElement('li');
        liElement.classList.add('clean-task')
        liElement.appendChild(articleElement);
        liElement.appendChild(divElement);

        taskUlElement.appendChild(liElement);

        formElement.reset();

        function edit() {
            placeInputElement.value = place;
            actionInputElement.value = action;
            personInputElement.value = person;

            taskUlElement.removeChild(liElement);
        }

        function done() {
            taskUlElement.removeChild(liElement);

            liElement.removeChild(divElement);

            const deleteButtonElement = document.createElement('button');
            deleteButtonElement.addEventListener('click', del);
            deleteButtonElement.classList.add('delete');
            deleteButtonElement.textContent = 'Delete';

            liElement.appendChild(deleteButtonElement);

            doneUlElement.appendChild(liElement);
        }

        function del() {
            doneUlElement.removeChild(liElement);
        }
    }
}
