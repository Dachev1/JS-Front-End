window.addEventListener("load", solve);

function solve() {
  const publsihButtonElement = document.getElementById('form-btn');
  publsihButtonElement.addEventListener('click', publish);

  function publish(e) {
    e.preventDefault();

    const firstNameElement = document.getElementById('first-name');
    const lastNameElement = document.getElementById('last-name');
    const ageElement = document.getElementById('age');
    const titleElement = document.getElementById('story-title');
    const genreElement = document.getElementById('genre');
    const storylement = document.getElementById('story');

    const firstName = firstNameElement.value;
    const lastName = lastNameElement.value;
    const age = ageElement.value;
    const title = titleElement.value;
    const genre = genreElement.value;
    const story = storylement.value;

    if (
      firstName === '' ||
      lastName === '' ||
      age === '' ||
      title === '' ||
      genre === '' ||
      story === ''
    ) { return; }

    const h4Element = document.createElement('h4');
    h4Element.textContent = `Name: ${firstName} ${lastName}`;

    const paraAgeElement = document.createElement('p');
    paraAgeElement.textContent = `Age: ${age}`;

    const paraTitleElement = document.createElement('p');
    paraTitleElement.textContent = `Title: ${title}`;

    const paraGenreElement = document.createElement('p');
    paraGenreElement.textContent = `Genre: ${genre}`

    const paraStoryElement = document.createElement('p');
    paraStoryElement.textContent = story;

    const articleElement = document.createElement('article');
    articleElement.appendChild(h4Element);
    articleElement.appendChild(paraAgeElement);
    articleElement.appendChild(paraTitleElement);
    articleElement.appendChild(paraGenreElement);
    articleElement.appendChild(paraStoryElement);

    const saveButtonElement = document.createElement('button');
    saveButtonElement.classList.add('save-btn');
    saveButtonElement.textContent = 'Save Story';
    saveButtonElement.addEventListener('click', onSave);

    const editButtonElement = document.createElement('button');
    editButtonElement.classList.add('edit-btn');
    editButtonElement.textContent = 'Edit Story';
    editButtonElement.addEventListener('click', onEdit);

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList.add('delete-btn');
    deleteButtonElement.textContent = 'Delete Story';
    deleteButtonElement.addEventListener('click', onDelete);

    const liElement = document.createElement('li');
    liElement.classList.add('story-info');
    liElement.appendChild(articleElement);
    liElement.appendChild(saveButtonElement);
    liElement.appendChild(editButtonElement);
    liElement.appendChild(deleteButtonElement);

    publsihButtonElement.setAttribute('disabled', 'true')
    const ulPreview = document.getElementById('preview-list');
    ulPreview.appendChild(liElement);

    document.querySelector('form').reset();
    // button actions

    function onEdit() {
      firstNameElement.value = firstName;
      lastNameElement.value = lastName;
      ageElement.value = age;
      titleElement.value = title;
      genreElement.value = genre;
      storylement.value = story;

      saveButtonElement.setAttribute('disabled', 'true')
      editButtonElement.setAttribute('disabled', 'true')
      editButtonElement.setAttribute('disabled', 'true')

      ulPreview.removeChild(liElement);

      publsihButtonElement.removeAttribute('disabled');
    }

    function onSave() {
      const mainDivElement = document.getElementById('main');

      mainDivElement.innerHTML = '<h1>Your story is saved!</h1>';
    }

    function onDelete() {
      ulPreview.removeChild(liElement);

      publsihButtonElement.removeAttribute('disabled');
    }
  }
}
