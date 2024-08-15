window.addEventListener("load", solve);

function solve() {
  const nextButtonElement = document.getElementById('next-btn');
  nextButtonElement.addEventListener('click', next);

  function next(e) {
    e.preventDefault();
    let studentInputField = document.getElementById('student');
    let universityInputField = document.getElementById('university');
    let scoreInputField = document.getElementById('score');

    const student = studentInputField.value;
    const university = universityInputField.value;
    const score = scoreInputField.value;

    if (student === '' || university === '' || score === '') {
      return;
    }

    const editButtonElement = document.createElement('button');
    editButtonElement.addEventListener('click', edit);
    editButtonElement.classList.add('action-btn', 'edit');
    editButtonElement.textContent = 'edit';

    const applyButtonElement = document.createElement('button');
    applyButtonElement.addEventListener('click', apply);
    applyButtonElement.classList.add('action-btn', 'apply');
    applyButtonElement.textContent = 'apply';

    const liElement = document.createElement('li');
    liElement.classList.add('application');

    liElement.appendChild(createArticle(studentInputField, universityInputField, scoreInputField));
    liElement.appendChild(editButtonElement);
    liElement.appendChild(applyButtonElement);

    const ulPreviewList = document.getElementById('preview-list');
    ulPreviewList.appendChild(liElement);

    nextButtonElement.setAttribute('disabled', 'true');

    studentInputField.value = '';
    universityInputField.value = '';
    scoreInputField.value = '';

    document.querySelector('.applyContent').reset();

    function edit() {
      nextButtonElement.removeAttribute('disabled');
      studentInputField.value = student;
      universityInputField.value = university;
      scoreInputField.value = score;

      ulPreviewList.removeChild(liElement);
    }

    function apply() {
      const ulCandidatesList = document.getElementById('candidates-list');

      ulPreviewList.removeChild(liElement);

      liElement.removeChild(editButtonElement);
      liElement.removeChild(applyButtonElement);

      ulCandidatesList.appendChild(liElement);
      nextButtonElement.removeAttribute('disabled');
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

      if (field.id === 'student') {
        const h4Element = document.createElement('h4');
        h4Element.textContent = field.value;

        element = h4Element;
      } else {
        const pElement = document.createElement('p');

        if (field.id === 'university') {
          pElement.textContent = `University: ${field.value}`;
        } else {
          pElement.textContent = `Score: ${field.value}`;
        }

        element = pElement;
      }

      return element;
    }
  }
}
