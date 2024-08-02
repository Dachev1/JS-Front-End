window.addEventListener("load", solve);

function solve() {
    const typeInputElement = document.getElementById('type');
    const ageInputElement = document.getElementById('age');
    const genderSelectElement = document.getElementById('gender');
    const adoptButtonElement = document.getElementById('adopt-btn');
    const adoptionUlElement = document.getElementById('adoption-info');
    const adoptedUlElement = document.getElementById('adopted-list');
    const formElement = document.querySelector("form");
    
    adoptButtonElement.addEventListener('click', onAdd);
    
    function onAdd(e) {
        e.preventDefault();
        
        if (
            typeInputElement.value == '' ||
            ageInputElement.value == '' ||
            genderSelectElement.value == ''
        ) {
            return;
        }
        
        const type = typeInputElement.value;
        const age = ageInputElement.value;
        const gender = genderSelectElement.value;
        
        const petParaElement = document.createElement('p');
        petParaElement.textContent = `Pet:${type}`;
        
        const genderParaElement = document.createElement('p');
        genderParaElement.textContent = `Gender:${gender}`;
        
        const ageParaElement = document.createElement('p');
        ageParaElement.textContent = `Age:${age}`;
        
        const articleElement = document.createElement('article');
        articleElement.appendChild(petParaElement);
        articleElement.appendChild(genderParaElement);
        articleElement.appendChild(ageParaElement);
        
        const editButtonElement = document.createElement('button');
        editButtonElement.addEventListener('click', edit);
        editButtonElement.classList.add('edit-btn');
        editButtonElement.textContent = 'Edit';
        
        
        const doneButtonElement = document.createElement('button');
        doneButtonElement.addEventListener('click', done)
        doneButtonElement.classList.add('done-btn');
        doneButtonElement.textContent = 'Done';
        
        const divElement = document.createElement('div');
        divElement.classList.add('buttons');
        divElement.appendChild(editButtonElement);
        divElement.appendChild(doneButtonElement);
        
        const liElement = document.createElement('li');
        liElement.appendChild(articleElement);
        liElement.appendChild(divElement);
        
        adoptionUlElement.appendChild(liElement);
        
        formElement.reset();
        
        function edit() {
            typeInputElement.value = type;
            genderSelectElement.value = gender;
            ageInputElement.value = age;
            
            adoptionUlElement.removeChild(liElement);
        }
        
        function done() {
            adoptionUlElement.removeChild(liElement);
            
            liElement.removeChild(divElement);
            
            const clearButtonElement = document.createElement('button');
            clearButtonElement.addEventListener('click', clear)
            clearButtonElement.classList.add('clear-btn');
            clearButtonElement.textContent = 'Clear';
            
            liElement.appendChild(clearButtonElement);
            adoptedUlElement.appendChild(liElement);
        }
        
        function clear() {
            adoptedUlElement.removeChild(liElement);
        }
    }
}
