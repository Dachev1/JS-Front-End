window.addEventListener("load", solve);

function solve() {
  const addButtonElement = document.getElementById('add-btn');
  addButtonElement.addEventListener('click', add);

  function add(e) {
    e.preventDefault();
    let playerInputField = document.getElementById('player');
    let scoreInputField = document.getElementById('score');
    let roundInputField = document.getElementById('round');

    const player = playerInputField.value;
    const score = scoreInputField.value;
    const round = roundInputField.value;

    const editButtonElement = document.createElement('button');
    editButtonElement.addEventListener('click', edit);
    editButtonElement.classList.add('btn', 'edit');
    editButtonElement.textContent = 'edit';

    const okButtonElement = document.createElement('button');
    okButtonElement.addEventListener('click', ok);
    okButtonElement.classList.add('btn', 'ok');
    okButtonElement.textContent = 'ok';

    const liElement = document.createElement('li');
    liElement.classList.add('dart-item');

    liElement.appendChild(createArticle(playerInputField, scoreInputField, roundInputField));
    liElement.appendChild(editButtonElement);
    liElement.appendChild(okButtonElement);

    const ulSureList = document.getElementById('sure-list');
    ulSureList.appendChild(liElement);

    addButtonElement.setAttribute('disabled', 'true');

    playerInputField.value = '';
    scoreInputField.value = '';
    roundInputField.value = '';

    document.querySelector('form').reset();

    function edit() {
      addButtonElement.removeAttribute('disabled');
      playerInputField.value = player;
      scoreInputField.value = score;
      roundInputField.value = round;

      ulSureList.removeChild(liElement);

    }

    function ok() {
      const ulScoreboardList = document.getElementById('scoreboard-list');

      ulSureList.removeChild(liElement);

      liElement.removeChild(editButtonElement);
      liElement.removeChild(okButtonElement);

      const clearButtonElement = document.createElement('button');
      clearButtonElement.addEventListener('click', clear);
      clearButtonElement.classList.add('btn', 'clear');
      clearButtonElement.textContent = 'Clear';

      ulScoreboardList.appendChild(liElement);
    }

    function clear() {
      location.reload();
    }

    function createArticle(player, score, round) {
      const articleElement = document.createElement('article');
      articleElement.appendChild(createPara(player));
      articleElement.appendChild(createPara(score));
      articleElement.appendChild(createPara(round));

      return articleElement;
    }

    function createPara(field) {
      const pElement = document.createElement('p');

      if (field.id === 'score') {
        pElement.textContent = `Score: ${field.value}`;
      } else if (field.id === 'round') {
        pElement.textContent = `Round: ${field.value}`;
      } else {
        pElement.textContent = field.value;
      }


      return pElement;
    }
  }
}
