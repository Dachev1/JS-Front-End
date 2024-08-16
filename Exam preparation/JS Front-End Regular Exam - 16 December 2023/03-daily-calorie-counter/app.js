const baseUrl = 'http://localhost:3030/jsonstore/tasks';

// Input fields
const foodInputElement = document.getElementById('food');
const timeInputElement = document.getElementById('time');
const caloriesInputElement = document.getElementById('calories');

// Buttons
const loadButton = document.getElementById('load-meals');
loadButton.addEventListener('click', load);

const addButton = document.getElementById('add-meal');
addButton.addEventListener('click', add);

async function load() {
    const response = await fetch(baseUrl);
    const mealsData = await response.json();

    const meals = Object.values(mealsData)
        .map(meal => createMealElement(meal.food, meal.calories, meal.time, meal._id));

    const list = document.getElementById('list');
    list.innerHTML = '';
    list.append(...meals);
}

function add() {
    const food = foodInputElement.value;
    const calories = caloriesInputElement.value;
    const time = timeInputElement.value;

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            food,
            calories,
            time,
        })
    }).then(() => {
        clearInputFields();
        load();
    })
}


function createMealElement(food, calories, time, id) {
    const foodH2Element = document.createElement('h2');
    foodH2Element.textContent = food;

    const timeH3Element = document.createElement('h3');
    timeH3Element.textContent = time;

    const caloriesH3Element = document.createElement('h3');
    caloriesH3Element.textContent = calories;

    const divElement = document.createElement('div');
    divElement.classList.add('meal');
    divElement.append(foodH2Element, timeH3Element, caloriesH3Element, createButtons(food, calories, time, id, divElement));

    return divElement;
}

function createButtons(food, calories, time, id, divElement) {
    const changeButtonElement = document.createElement('button');
    changeButtonElement.classList.add('change-meal');
    changeButtonElement.textContent = 'Change';
    changeButtonElement.addEventListener('click', change);

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList.add('delete-meal');
    deleteButtonElement.textContent = 'Delete';
    deleteButtonElement.addEventListener('click', deleteMeal);

    const div = document.createElement('div');
    div.classList.add('meal-buttons');
    div.append(changeButtonElement, deleteButtonElement);

    return div;

    function change() {
        foodInputElement.value = food;
        timeInputElement.value = time;
        caloriesInputElement.value = calories;

        divElement.remove();

        addButton.setAttribute('disabled', 'disabled');

        const editButton = document.getElementById('edit-meal');
        editButton.removeAttribute('disabled');
        editButton.addEventListener('click', edit);

        function edit() {
            fetch(`${baseUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    food: foodInputElement.value,
                    calories: caloriesInputElement.value,
                    time: timeInputElement.value,
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

    function deleteMeal() {
        fetch(`${baseUrl}/${id}`,{
            method: 'DELETE',
        }).then(divElement.remove());
    }
}

function clearInputFields() {
    foodInputElement.value = '';
    timeInputElement.value = '';
    caloriesInputElement.value = '';
}
