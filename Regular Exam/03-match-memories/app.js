const baseURL = 'http://localhost:3030/jsonstore/matches';

// Input fields
const hostInputField = document.getElementById('host');
const scoreInputField = document.getElementById('score');
const guestInputField = document.getElementById('guest');

const list = document.getElementById('list');

const loadMatchesButtonElement = document.getElementById('load-matches');
loadMatchesButtonElement.addEventListener('click', load);

const addMatchButtonElement = document.getElementById('add-match');
addMatchButtonElement.addEventListener('click', add);

function load() {
    fetch(baseURL)
        .then(response => response.json())
        .then(responseData => loadMatches(responseData))
}

function add(e) {
    e.preventDefault();

    const host = hostInputField.value;
    const score = scoreInputField.value;
    const guest = guestInputField.value;

    fetch(baseURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            host,
            score,
            guest,
        })
    })
        .then(clearInputFields())
        .then(load())
        .then(document.querySelector('form').reset());
}

function loadMatches(responseData) {
    list.innerHTML = '';

    Object.values(responseData)
        .forEach(data => {
            const divInfoElement = document.createElement('div');
            divInfoElement.classList.add('info');
            divInfoElement.appendChild(createPara(data.host));
            divInfoElement.appendChild(createPara(data.score));
            divInfoElement.appendChild(createPara(data.guest));

            const liMatch = document.createElement('li');
            liMatch.classList.add('match');
            liMatch.appendChild(divInfoElement);
            liMatch.appendChild(buttons(data.host, data.score, data.guest, data._id, liMatch));

            list.appendChild(liMatch)
        })
}

function buttons(host, score, guest, id, liMatch) {
    const changeButtonElement = document.createElement('button');
    changeButtonElement.classList.add('change-btn');
    changeButtonElement.textContent = 'Change';
    changeButtonElement.addEventListener('click', change);

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList.add('delete-btn');
    deleteButtonElement.textContent = 'Delete';
    deleteButtonElement.addEventListener('click', deleteGame);

    const div = document.createElement('div');
    div.classList.add('btn-wrapper');
    div.appendChild(changeButtonElement);
    div.appendChild(deleteButtonElement);

    return div;

    function change() {
        hostInputField.value = host;
        scoreInputField.value = score;
        guestInputField.value = guest;

        addMatchButtonElement.setAttribute('disabled', 'true');

        const editButtonElement = document.getElementById('edit-match');
        editButtonElement.removeAttribute('disabled');
        editButtonElement.addEventListener('click', () => {

            fetch(`${baseURL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    host: hostInputField.value,
                    score: scoreInputField.value,
                    guest: guestInputField.value,
                    _id: id
                })
            })
                .then(() => {
                    addMatchButtonElement.removeAttribute('disabled')
                    editButtonElement.setAttribute('disabled', 'true')

                    load();
                    clearInputFields();
                });
        })
    }

    function deleteGame() {
        fetch(`${baseURL}/${id}`, {
            method: 'DELETE',
        })
            .then(liMatch.remove());
    }
}

function createPara(value) {
    const pElement = document.createElement('p');
    pElement.textContent = value;

    return pElement;
}

function clearInputFields() {
    hostInputField.value = '';
    scoreInputField.value = '';
    guestInputField.value = '';
}
