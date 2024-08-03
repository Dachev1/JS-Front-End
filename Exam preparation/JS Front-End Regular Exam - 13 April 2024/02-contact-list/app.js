window.addEventListener("load", solve);

function solve() {
    //form
    const formElement = document.querySelector('form');
    
    // input fields
    const nameInputElement = document.getElementById('name');
    const phoneInputElement = document.getElementById('phone');
    const categoryInputElement = document.getElementById('category');
    
    // list element
    const checkUlElement = document.getElementById('check-list');
    const contactUlElement = document.getElementById('contact-list');
    
    // button
    const addButtonElement = document.getElementById('add-btn');
    
    
    // add event
    addButtonElement.addEventListener('click', add);
    
    
    function add(e) {
        e.preventDefault;
        
        const name = nameInputElement.value;
        const phone = phoneInputElement.value;
        const category = categoryInputElement.value;
        
        if (name === '' || phone === '' || category === '') {
            return;
        }
        
        const paraNameElement = document.createElement('p');
        paraNameElement.textContent = `${nameInputElement.id}:${name}`;
        
        const paraPhoneElement = document.createElement('p');
        paraPhoneElement.textContent = `${phoneInputElement.id}:${phone}`;
        
        const paraCategoryElement = document.createElement('p');
        paraCategoryElement.textContent = `${categoryInputElement.id}:${category}`;
        
        const articleElement = document.createElement('article');
        articleElement.appendChild(paraNameElement);
        articleElement.appendChild(paraPhoneElement);
        articleElement.appendChild(paraCategoryElement);
        
        const editButtonElement = document.createElement('button');
        editButtonElement.addEventListener('click', edit);
        editButtonElement.classList.add('edit-btn');
        
        const saveButtonElement = document.createElement('button');
        saveButtonElement.addEventListener('click', save);
        saveButtonElement.classList.add('save-btn');
        
        const divElement = document.createElement('div');
        divElement.classList.add('buttons');
        divElement.appendChild(editButtonElement);
        divElement.appendChild(saveButtonElement);
        
        const liElement = document.createElement('li');
        liElement.appendChild(articleElement);
        liElement.appendChild(divElement);
        
        checkUlElement.appendChild(liElement);
        
        formElement.reset();
        
        function edit() {
            nameInputElement.value = name;
            phoneInputElement.value = phone;
            categoryInputElement.value = category;
            
            checkUlElement.removeChild(liElement);
        }
        
        function save() {
            checkUlElement.removeChild(liElement);
            
            liElement.removeChild(divElement);
            
            const deleteButtonElement = document.createElement('button');
            deleteButtonElement.addEventListener('click', del);
            deleteButtonElement.classList.add('del-btn');
            
            liElement.appendChild(deleteButtonElement);
            
            contactUlElement.appendChild(liElement);
        }
        
        function del() {
            contactUlElement.removeChild(liElement);
        }
    }
}
