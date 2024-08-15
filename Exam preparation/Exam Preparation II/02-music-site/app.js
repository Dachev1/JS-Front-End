window.addEventListener("load", solve);

function solve() {
    const likesElement = document.querySelector('div.likes p');
    let totalLikes = 0;

    const addButtonElement = document.getElementById('add-btn');
    addButtonElement.addEventListener('click', add);

    function add(e) {
        e.preventDefault();

        const genreInputElement = document.getElementById('genre');
        const nameInputElement = document.getElementById('name');
        const authorInputElement = document.getElementById('author');
        const dateInputElement = document.getElementById('date');

        const genre = genreInputElement.value;
        const name = nameInputElement.value;
        const author = authorInputElement.value;
        const date = dateInputElement.value;

        if (genre === '' ||
            name === '' ||
            author === '' ||
            date === '') { return; }

        const imgElement = document.createElement('img');
        imgElement.src = './static/img/img.png';

        const genreH2Element = document.createElement('h2');
        genreH2Element.textContent = `Genre: ${genre}`;

        const nameH2Element = document.createElement('h2');
        nameH2Element.textContent = `Name: ${name}`;

        const authorH2Element = document.createElement('h2');
        authorH2Element.textContent = `Author: ${author}`;

        const dateH3Element = document.createElement('h3');
        dateH3Element.textContent = `Date: ${date}`;

        const saveButtonElement = document.createElement('button');
        saveButtonElement.classList.add('save-btn');
        saveButtonElement.textContent = 'Save song';
        saveButtonElement.addEventListener('click', onSave);

        const likeButtonElement = document.createElement('button');
        likeButtonElement.classList.add('like-btn');
        likeButtonElement.textContent = 'Like song';
        likeButtonElement.addEventListener('click', onLike);

        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.classList.add('delete-btn');
        deleteButtonElement.textContent = 'Delete';
        deleteButtonElement.addEventListener('click', onDelete);

        const divElement = document.createElement('div');
        divElement.classList.add('hits-info');

        divElement.appendChild(imgElement);
        divElement.appendChild(genreH2Element);
        divElement.appendChild(nameH2Element);
        divElement.appendChild(authorH2Element);
        divElement.appendChild(dateH3Element);
        divElement.appendChild(saveButtonElement);
        divElement.appendChild(likeButtonElement);
        divElement.appendChild(deleteButtonElement);

        const container = document.querySelector('div.all-hits-container');
        container.appendChild(divElement);

        document.querySelector('form').reset();

        // button actions

        function onLike() {

            likesElement.textContent = `Total Likes: ${totalLikes += 1}`;
            likeButtonElement.setAttribute('disabled', 'true')
        }

        function onSave() {
            const savedHits = document.querySelector('.saved-container');

            container.removeChild(divElement);

            divElement.removeChild(saveButtonElement);
            divElement.removeChild(likeButtonElement);

            savedHits.appendChild(divElement);
        }

        function onDelete() {
            divElement.remove();
            likesElement.textContent = `Total Likes: ${totalLikes -= 1}`;
        }
    }
}
