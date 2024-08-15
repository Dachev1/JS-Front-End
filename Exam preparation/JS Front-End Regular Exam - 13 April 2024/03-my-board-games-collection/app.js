const baseURL = 'http://localhost:3030/jsonstore/games';

// Input fields
const nameInputField = document.getElementById('g-name');
const typeInputField = document.getElementById('type');
const playersInputField = document.getElementById('players');

const gameList = document.getElementById('games-list');

const loadGamesButtonElement = document.getElementById('load-games');
loadGamesButtonElement.addEventListener('click', load);

const addGameButtonElement = document.getElementById('add-game');
addGameButtonElement.addEventListener('click', add);

function load() {
    fetch(baseURL)
        .then(response => response.json())
        .then(responseData => loadGames(responseData))
}

function add(e) {
    e.preventDefault();
    const name = nameInputField.value;
    const type = typeInputField.value;
    const players = playersInputField.value;

    if (name === '' || type === '' || players === '') {
        return;
    }

    fetch(baseURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            type,
            players,
        })
    })
        .then(clearInputFields())
        .then(load())
        .then(document.querySelector('form').reset());
}

function loadGames(responseData) {

    gameList.innerHTML = '';
    Object.values(responseData)
        .forEach(data => {
            const divContent = document.createElement('div');
            divContent.classList.add('content');
            divContent.appendChild(createPara(data.name));
            divContent.appendChild(createPara(data.type));
            divContent.appendChild(createPara(data.players));

            const divBoardGame = document.createElement('div');
            divBoardGame.classList.add('board-game');
            divBoardGame.appendChild(divContent);
            divBoardGame.appendChild(buttons(data.name, data.type, data.players, data._id, divBoardGame));

            gameList.appendChild(divBoardGame)
        })
}

function buttons(name, type, players, id, boardGame) {
    const changeButtonElement = document.createElement('button');
    changeButtonElement.classList.add('change-btn');
    changeButtonElement.textContent = 'Change';
    changeButtonElement.addEventListener('click', change);

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList.add('delete-btn');
    deleteButtonElement.textContent = 'Delete';
    deleteButtonElement.addEventListener('click', deleteGame);

    const div = document.createElement('div');
    div.classList.add('buttons-container');
    div.appendChild(changeButtonElement);
    div.appendChild(deleteButtonElement);

    return div;

    function change() {
        nameInputField.value = name;
        typeInputField.value = type;
        playersInputField.value = players;

        addGameButtonElement.setAttribute('disabled', 'true');

        const editButtonElement = document.getElementById('edit-game');
        editButtonElement.removeAttribute('disabled');
        editButtonElement.addEventListener('click', () => {

            fetch(`${baseURL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: nameInputField.value,
                    type: typeInputField.value,
                    players: playersInputField.value,
                })
            })
                .then(() => {
                    id = null;

                    addGameButtonElement.removeAttribute('disabled')
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
            .then(boardGame.remove());
    }
}

function createPara(value) {
    const pElement = document.createElement('p');
    pElement.textContent = value;

    return pElement;
}

function clearInputFields() {
    nameInputField.value = '';
    typeInputField.value = '';
    playersInputField.value = '';
}
