async function solution() {
    const baseURL = 'http://localhost:3030/jsonstore/advanced/articles/list';

    const response = await fetch(baseURL);
    const listsData = await response.json();

    for (const { _id, title } of Object.values(listsData)) {
        const sectionElement = document.getElementById('main')

        const divElement = document.createElement('div');
        divElement.classList.add('accordion');

        const divHTML = `
            <div class="head">
                <span>${title}</span>
                <button class="button" id="${_id}">More</button>
            </div>
            <div class="extra">
                <p>Scalable Vector Graphics .....</p>
            </div>
        `

        divElement.innerHTML = divHTML;
        sectionElement.appendChild(divElement);

        const buttonElement = divElement.querySelector('.button');

        buttonElement.addEventListener('click', async () => {
            const contentURL = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${_id}`);
            const contentData = await contentURL.json();

            const { content, } = contentData;
            const divToShow = divElement.querySelector('.extra');
            const pToShow = divElement.querySelector('.extra p');
            pToShow.textContent = content;

            switch ((buttonElement.textContent)) {
                case 'More':
                    buttonElement.textContent = 'Less';
                    divToShow.style.display = 'block';
                    break;

                case 'Less':
                    buttonElement.textContent = 'More';
                    divToShow.style.display = 'none';
                    break;
            }
        })
    }
}

solution();
