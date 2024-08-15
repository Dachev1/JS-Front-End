window.addEventListener('load', solve);

function solve() {
    const totalPointsElement = document.getElementById('total-sprint-points');
    const createButtonElement = document.getElementById('create-task-btn');
    const deleteTaskButton = document.getElementById('delete-task-btn');
    const taskId = document.getElementById('task-id');

    let taskCounter = 1;
    let totalPoints = 0;

    createButtonElement.addEventListener('click', create);

    function create(e) {
        e.preventDefault();

        const titleElement = document.getElementById('title');
        const descriptionElement = document.getElementById('description');
        const priorityElement = document.getElementById('label');
        const pointsElement = document.getElementById('points');
        const assigneeElement = document.getElementById('assignee');

        const title = descriptionElement.value;
        const description = titleElement.value;
        const priority = priorityElement.value;
        const points = pointsElement.value;
        const assignee = assigneeElement.value;

        if (
            title === '' ||
            description === '' ||
            priority === '' ||
            points === '' ||
            assignee === ''
        ) { return; }

        const divLabelElement = document.createElement('div');

        let icon = '';
        if (priorityElement.value === 'Feature') {
            icon = '&#8865';
            divLabelElement.classList.add('task-card-label', 'feature');
        } else if (priorityElement.value === 'Low Priority Bug') {
            icon = '&#9737';
            divLabelElement.classList.add('task-card-label', 'low-priority');
        } else if (priorityElement.value === 'High Priority Bug') {
            icon = '&#9888';
            divLabelElement.classList.add('task-card-label', 'high-priority');
        }

        divLabelElement.innerHTML = `${priorityElement.value} ${icon}`;

        const h3Elemenet = document.createElement('h3');
        h3Elemenet.classList.add('task-card-title');
        h3Elemenet.textContent = titleElement.value;

        const pElemenet = document.createElement('p');
        pElemenet.classList.add('task-card-description');
        pElemenet.textContent = descriptionElement.value;


        const divPointsElemenet = document.createElement('div');
        divPointsElemenet.classList.add('task-card-points');
        divPointsElemenet.textContent = `Estimated at ${pointsElement.value} pts`;
        totalPoints += Number(points);

        const divAssigneeeElemenet = document.createElement('div');
        divAssigneeeElemenet.classList.add('task-card-assignee');
        divAssigneeeElemenet.textContent = `Assigned to: ${assigneeElement.value}`;

        const divCardAction = document.createElement('div');
        divCardAction.classList.add('task-card-actions');

        const deleteButton = document.createElement('button');
        deleteButton.addEventListener('click', onDelete);
        deleteButton.textContent = 'Delete';

        divCardAction.appendChild(deleteButton);

        const articleElement = document.createElement('article');
        articleElement.id = `task-${taskCounter++}`;
        articleElement.classList.add('task-card');

        articleElement.appendChild(divLabelElement);
        articleElement.appendChild(h3Elemenet);
        articleElement.appendChild(pElemenet);
        articleElement.appendChild(divPointsElemenet);
        articleElement.appendChild(divAssigneeeElemenet);
        articleElement.appendChild(divCardAction);

        const tasksSection = document.getElementById('tasks-section');
        tasksSection.appendChild(articleElement);

        totalPointsElement.textContent = `Total Points ${totalPoints}pts`

        clearFields();

        // reset form
        document.getElementById('create-task-form').reset();

        function onDelete() {
            titleElement.value = title;
            descriptionElement.value = description;
            priorityElement.value = priority;
            pointsElement.value = points;
            assigneeElement.value = assignee;

            taskId.value = articleElement.id;

            disableFields();

            createButtonElement.setAttribute('disabled', 'true')

            deleteTaskButton.addEventListener('click', deleteTask);
            deleteTaskButton.removeAttribute('disabled')
        }

        // button functions
        function deleteTask() {

            clearFields();

            enableFields();

            const currentPoints = Number(totalPointsElement.textContent.replace('Total Points ', '').replace('pts', ''));
            totalPoints -= currentPoints;
            taskId.value = '';

            createButtonElement.removeAttribute('disabled');
            deleteTaskButton.setAttribute('disabled', 'true')

            tasksSection.removeChild(articleElement);

            totalPointsElement.textContent = `Total Points ${totalPoints}pts`
        }

        function clearFields() {
            titleElement.value = '';
            descriptionElement.value = '';
            priorityElement.value = '';
            pointsElement.value = '';
            assigneeElement.value = '';
        }

        function enableFields() {
            titleElement.removeAttribute('disabled');
            descriptionElement.removeAttribute('disabled');
            priorityElement.removeAttribute('disabled');
            pointsElement.removeAttribute('disabled');
            assigneeElement.removeAttribute('disabled');
        }

        function disableFields() {
            titleElement.setAttribute('disabled', 'true');
            descriptionElement.setAttribute('disabled', 'true');
            priorityElement.setAttribute('disabled', 'true');
            pointsElement.setAttribute('disabled', 'true');
            assigneeElement.setAttribute('disabled', 'true');
        }
    }
}
