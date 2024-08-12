function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/collections/students';
    const tbodyElement = document.querySelector('#results tbody');

    onload();

    const submitButtonElement = document.getElementById('submit');
    submitButtonElement.addEventListener('click', submit);

    function onload() {
        fetch(baseURL)
            .then(response => response.json())
            .then(students => {
                tbodyElement.innerHTML = '';
                Object.values(students)
                    .forEach(student => {
                        tbodyElement.appendChild(createTr(student));
                    })
            })
    }

    function submit() {
        const firstName = document.querySelector('input[name=firstName]');
        const lastName = document.querySelector('input[name=lastName]');
        const facultyNumber = document.querySelector('input[name=facultyNumber]');
        const grade = document.querySelector('input[name=grade]');

        let student = {
            firstName: firstName.value,
            lastName: lastName.value,
            facultyNumber: facultyNumber.value,
            grade: grade.value
        }

        fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(student)
        })

        onload()

        firstName.value = '';
        lastName.value = '';
        facultyNumber.value = '';
        grade.value = '';
    }

    function createTr(student) {
        const trElement = document.createElement('tr');

        trElement.appendChild(createTd(student.firstName));
        trElement.appendChild(createTd(student.lastName));
        trElement.appendChild(createTd(student.facultyNumber));
        trElement.appendChild(createTd(student.grade));

        return trElement;
    }

    function createTd(value) {
        const tdElement = document.createElement('td');
        tdElement.textContent = value;

        return tdElement;
    }
}

attachEvents();
