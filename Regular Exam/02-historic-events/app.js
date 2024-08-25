window.addEventListener("load", solve);

function solve() {
    // Input fields
    const nameInputElement = document.getElementById('name');
    const timeInputElement = document.getElementById('time');
    const descriptionInputElement = document.getElementById('description');

    const addButton = document.getElementById('add-btn');
    addButton.addEventListener('click', add);

    function add(e) {
        e.preventDefault();

        const ulPreview = document.getElementById('preview-list');
        ulPreview.appendChild(createLiElement());

        clearInputFields();
        addButton.setAttribute('disabled', 'disabled');
        document.querySelector('form').reset();
    }

    function createLiElement() {
        const name = nameInputElement.value;
        const time = timeInputElement.value;
        const description = descriptionInputElement.value;

        if (name === '' || time === '' || description === '') {
            return;
        }
        
        const pNameElement = document.createElement('p');
        pNameElement.textContent = name;

        const pTimeElement = document.createElement('p');
        pTimeElement.textContent = time;

        const pDescriptionElement = document.createElement('p');
        pDescriptionElement.textContent = description;

        const articleElement = document.createElement('article');
        articleElement.appendChild(pNameElement);
        articleElement.appendChild(pTimeElement);
        articleElement.appendChild(pDescriptionElement);

        const liElement = document.createElement('li');
        liElement.appendChild(articleElement);
        liElement.appendChild(createButtonsElements(name, time, description, liElement));

        return liElement;
    }

    function createButtonsElements(name, time, description, liElement) {
        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', edit);

        const nextButton = document.createElement('button');
        nextButton.classList.add('next-btn');
        nextButton.textContent = 'Next';
        nextButton.addEventListener('click', next);

        const divButtonsElement = document.createElement('div');
        divButtonsElement.classList.add('buttons');
        divButtonsElement.appendChild(editButton);
        divButtonsElement.appendChild(nextButton);

        return divButtonsElement;

        function edit() {
            nameInputElement.value = name;
            timeInputElement.value = time;
            descriptionInputElement.value = description;

            liElement.remove();
            addButton.removeAttribute('disabled');
        }

        function next() {
            liElement.remove();

            const ulArchive = document.getElementById('archive-list');

            liElement.removeChild(divButtonsElement)

            const archiveButton = document.createElement('button');
            archiveButton.classList.add('archive-btn');
            archiveButton.textContent = 'Archive';
            archiveButton.addEventListener('click', () => {
                liElement.remove();
                addButton.removeAttribute('disabled');
            })

            liElement.appendChild(archiveButton);

            ulArchive.appendChild(liElement)
        }
    }

    function clearInputFields() {
        nameInputElement.value = '';
        timeInputElement.value = '';
        descriptionInputElement.value = '';
    }
}
