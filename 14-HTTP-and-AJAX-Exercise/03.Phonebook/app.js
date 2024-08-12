function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/phonebook';

    const loadButtonElement = document.getElementById('btnLoad');
    loadButtonElement.addEventListener('click', load);

    const creatButtonElement = document.getElementById('btnCreate');
    creatButtonElement.addEventListener('click', create);

    async function load(e) {
        const ulElement = document.getElementById('phonebook');

        const response = await fetch(baseUrl);
        const contacts = await response.json();

        ulElement.innerHTML = '';
        const fragmentElement = document.createDocumentFragment();
        Object.values(contacts)
            .forEach(contact => {
                fragmentElement.appendChild(createLiElement(contact));
            })

        ulElement.appendChild(fragmentElement);
    }

    async function create(e) {
        const inputPersonField = document.getElementById('person');
        const inputPhoneField = document.getElementById('phone');

        const person = inputPersonField.value;
        const phone = inputPhoneField.value

        if (person === '' || phone === '') {
            return;
        }

        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                person,
                phone,
            })
        })
            .then(() => {
                inputPersonField.value = '';
                inputPhoneField.value = '';
            });

        load();
    }

    function createLiElement(contact) {
        const liElement = document.createElement('li');
        liElement.textContent = `${contact.person}: ${contact.phone}`

        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.textContent = 'Delete';
        deleteButtonElement.addEventListener('click', () => {
            fetch(`${baseUrl}/${contact._id}`, {
                method: 'DELETE',
            })
                .then(liElement.remove());
        })

        liElement.appendChild(deleteButtonElement);
        return liElement;
    }
}

attachEvents();
