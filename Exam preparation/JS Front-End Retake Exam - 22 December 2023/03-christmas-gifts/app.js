const baseUrl = 'http://localhost:3030/jsonstore/gifts'

// Input fields
const giftInputElement = document.getElementById('gift');
const forInputElement = document.getElementById('for');
const priceInputElement = document.getElementById('price');

// Buttons
const loadButton = document.getElementById('load-presents');
loadButton.addEventListener('click', load);

const addButton = document.getElementById('add-present');
addButton.addEventListener('click', add);

async function load() {
    const response = await fetch(baseUrl);
    const presentsData = await response.json();

    const presentsElements = Object.values(presentsData)
        .map(present => createPresentElement(present.gift, present.for, present.price, present._id));

    const giftList = document.getElementById('gift-list');
    giftList.innerHTML = '';
    giftList.append(...presentsElements); // I think append can't be use in JUDGE
}

async function add() {
    const gift = giftInputElement.value;
    const name = forInputElement.value;
    const price = priceInputElement.value;

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            gift,
            for: name,
            price,
        })
    }).then(() => {
        clearInput();
        load();
    })
}

function createPresentElement(gift, name, price, id) {
    const pGiftElement = document.createElement('p');
    pGiftElement.textContent = gift;

    const pNameElement = document.createElement('p');
    pNameElement.textContent = name;

    const pPriceElement = document.createElement('p');
    pPriceElement.textContent = price;

    const divContentElement = document.createElement('div');
    divContentElement.classList.add('content');
    divContentElement.appendChild(pGiftElement);
    divContentElement.appendChild(pNameElement);
    divContentElement.appendChild(pPriceElement);


    const divGiftSockElement = document.createElement('div');
    divGiftSockElement.classList.add('gift-sock');
    divGiftSockElement.appendChild(divContentElement);
    divGiftSockElement.appendChild(createButtons(gift, name, price, id, divGiftSockElement));

    return divGiftSockElement;
}

function createButtons(gift, name, price, id, divGiftSockElement) {
    const changeButtonElement = document.createElement('button');
    changeButtonElement.classList.add('change-btn');
    changeButtonElement.textContent = 'Change';
    changeButtonElement.addEventListener('click', change);

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList.add('delete-btn');
    deleteButtonElement.textContent = 'Delete';
    deleteButtonElement.addEventListener('click', deleteGift);

    const divButtonsContainer = document.createElement('div');
    divButtonsContainer.classList.add('buttons-container');
    divButtonsContainer.appendChild(changeButtonElement);
    divButtonsContainer.appendChild(deleteButtonElement);

    return divButtonsContainer;

    function change() {
        giftInputElement.value = gift;
        forInputElement.value = name;
        priceInputElement.value = price;

        divGiftSockElement.remove();

        addButton.setAttribute('disabled', 'disabled');

        const editButton = document.getElementById('edit-present');
        editButton.removeAttribute('disabled');
        editButton.addEventListener('click', edit);

        function edit() {
            fetch(`${baseUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    gift: giftInputElement.value,
                    for: forInputElement.value,
                    price: priceInputElement.value,
                    _id: id,
                })
            }).then(() => {
                addButton.removeAttribute('disabled');
                editButton.setAttribute('disabled', 'disabled');
                clearInput();
                load();
            })
        }
    }

    function deleteGift() {
        fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
        }).then(divGiftSockElement.remove());
    }
}

function clearInput() {
    giftInputElement.value = '';
    forInputElement.value = '';
    priceInputElement.value = '';
}
