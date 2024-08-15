window.addEventListener("load", solve);

function solve() {
  const publishButtonElement = document.getElementById('publish-btn');
  publishButtonElement.addEventListener('click', next);

  function next(e) {
    e.preventDefault();
    let titleInputField = document.getElementById('task-title');
    let categoryInputField = document.getElementById('task-category');
    let contentInputField = document.getElementById('task-content');

    const title = titleInputField.value;
    const category = categoryInputField.value;
    const content = contentInputField.value;

    if (title === '' || category === '' || content === '') {
      return;
    }

    const editButtonElement = document.createElement('button');
    editButtonElement.addEventListener('click', edit);
    editButtonElement.classList.add('action-btn', 'edit');
    editButtonElement.textContent = 'Edit';

    const postButtonElement = document.createElement('button');
    postButtonElement.addEventListener('click', post);
    postButtonElement.classList.add('action-btn', 'post');
    postButtonElement.textContent = 'Post';

    const liElement = document.createElement('li');
    liElement.classList.add('rpost');

    liElement.appendChild(createArticle(titleInputField, categoryInputField, contentInputField));
    liElement.appendChild(editButtonElement);
    liElement.appendChild(postButtonElement);

    const ulReviewList = document.getElementById('review-list');
    ulReviewList.appendChild(liElement);

    publishButtonElement.setAttribute('disabled', 'true');

    titleInputField.value = '';
    categoryInputField.value = '';
    contentInputField.value = '';

    document.querySelector('.newPostContent').reset();

    function edit() {
      publishButtonElement.removeAttribute('disabled');
      titleInputField.value = title;
      categoryInputField.value = category;
      contentInputField.value = content;

      ulReviewList.removeChild(liElement);
    }

    function post() {
      const ulPublishedList = document.getElementById('published-list');

      ulReviewList.removeChild(liElement);

      liElement.removeChild(editButtonElement);
      liElement.removeChild(postButtonElement);

      ulPublishedList.appendChild(liElement);
      publishButtonElement.removeAttribute('disabled');
    }

    function createArticle(student, university, score) {
      const articleElement = document.createElement('article');
      articleElement.appendChild(create(student));
      articleElement.appendChild(create(university));
      articleElement.appendChild(create(score));

      return articleElement;
    }

    function create(field) {
      let element = null;

      if (field.id === 'task-title') {
        const h4Element = document.createElement('h4');
        h4Element.textContent = field.value;

        element = h4Element;
      } else {
        const pElement = document.createElement('p');

        if (field.id === 'task-category') {
          pElement.textContent = `Category: ${field.value}`;
        } else {
          pElement.textContent = `Content: ${field.value}`;
        }

        element = pElement;
      }

      return element;
    }
  }
}
