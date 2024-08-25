import { login, register, getSolutions, addSolution, editSolution, deleteSolution, getOne, getAuth } from "./authService.js";
import { handleLocation } from "./routerUnits.js";

export function renderHome() {
    const homeSection = document.querySelector('#home');
    homeSection.style.display = '';
}
export async function renderSolutions() {
    const solutionsSection = document.querySelector('#solutions');
    solutionsSection.style.display = '';

    const solutions = await getSolutions();

    const h2Element = document.getElementById('no-solution');
    if (solutions.length < 1) {
        h2Element.style.display = 'block';
        return;
    }

    const solutionElements = Object.values(solutions)
        .map(solution => createSolutionElement(solution.imageUrl, solution.type, solution.description, solution._id));

    solutionsSection.innerHTML = '';
    solutionsSection.append(...solutionElements);
}

export function renderCreate() {
    const createSection = document.querySelector('#create');
    createSection.style.display = '';

    const formElement = createSection.querySelector('.create-form');
    const sumbitButton = formElement.querySelector('button');

    sumbitButton.addEventListener('click', async () => {
        const formData = new FormData(formElement);
        const type = formData.get('type');
        const imageUrl = formData.get('image-url');
        const description = formData.get('description');
        const learnMore = formData.get('more-info');

        await addSolution(type, imageUrl, description, learnMore, getAuth().accessToken);
        handleLocation('/solutions');
        formElement.reset();
    })
}

export async function renderDetails(params) {
    const detailsSection = document.getElementById('details');
    detailsSection.style.display = 'block';

    const solution = await getOne(params.solutionId);

    const imgElement = detailsSection.querySelector('#details-img');
    const typeElement = detailsSection.querySelector('#details-type');
    const descriptionElement = detailsSection.querySelector('#description');
    const infoElement = detailsSection.querySelector('#more-info');

    imgElement.src = solution.imageUrl;
    typeElement.textContent = solution.type;
    descriptionElement.textContent = solution.description;
    infoElement.textContent = solution.learnMore;

    const authData = getAuth();
    const editButton = detailsSection.querySelector('#edit-btn');
    const deleteButton = detailsSection.querySelector('#delete-btn');
    const likeButton = detailsSection.querySelector('#like-btn');

    if (authData.userId === solution._ownerId) {
        editButton.style.display = '';
        editButton.href = `/solutions/${solution._id}/edit`;

        deleteButton.style.display = '';
        deleteButton.href = `/solutions/${solution._id}/delete`;

        likeButton.style.display = 'none';
    } else {
        editButton.style.display = 'none';
        deleteButton.style.display = 'none';

        if (isAuthenticated && authData.userId !== solution._ownerId) {
            likeButton.style.display = '';
        }
    }
}

export async function renderEdit(params) {
    const editElement = document.getElementById('edit');
    editElement.style.display = 'block';

    const solution = await getOne(params.solutionId);

    const type = editElement.querySelector('#type');
    const imageUrl = editElement.querySelector('#image-url');
    const description = editElement.querySelector('#description');
    const moreInfo = editElement.querySelector('#more-info');

    type.value = solution.type;
    imageUrl.value = solution.imageUrl;
    description.value = solution.description;
    moreInfo.value = solution.learnMore;

    const editButton = editElement.querySelector('button');
    editButton.addEventListener('click', async () => {
        await editSolution(type.value, imageUrl.value, description.value, moreInfo.value, getAuth().accessToken, solution._id);
        handleLocation('/solutions');
        editElement.querySelector('.edit-form').reset();
    })
}

export async function renderDelete(params) {
    const solution = await getOne(params.solutionId);
    await deleteSolution(getAuth().accessToken, solution._id);
    handleLocation('/solutions');
}

export function renderLogout() {
    removeAuthData();
    handleLocation('/');
}

export function renderLogin() {
    const loginSection = document.getElementById('login');
    loginSection.style.display = 'block';

    const formElement = loginSection.querySelector('.login-form');
    const sumbitButton = formElement.querySelector('button')

    sumbitButton.addEventListener('click', async (e) => {
        const formData = new FormData(formElement);
        const email = formData.get('email');
        const password = formData.get('password');

        const authData = await login(email, password);

        saveAuthData(authData._id, authData.email, authData.accessToken);
        handleLocation('/');
        formElement.reset();
    })
}

export function renderRegister() {
    const registerSection = document.getElementById('register');
    registerSection.style.display = '';

    const formElement = registerSection.querySelector('.register-form');
    const registerSumbitButtonElement = formElement.querySelector('button');

    registerSumbitButtonElement.addEventListener('click', async (e) => {
        const formData = new FormData(formElement);
        const email = formData.get('email');
        const password = formData.get('password');
        const rePassword = formData.get('re-password');

        const authData = await register(email, password, rePassword);

        saveAuthData(authData._id, authData.email, authData.accessToken)
        handleLocation('/');
        formElement.reset();
    })
}

export function renderHeader() {
    const headerElement = document.querySelector('#wrapper > header');

    const userNav = headerElement.querySelector('.user');
    const guestNav = headerElement.querySelector('.guest');

    if (isAuthenticated()) {
        guestNav.style.display = 'none';
        userNav.style.display = '';
    } else {
        guestNav.style.display = '';
        userNav.style.display = 'none';
    }
}

function createSolutionElement(imageUrl, type, description, _id) {
    const h3Element = document.createElement('h3');
    h3Element.classList.add('type');
    h3Element.textContent = type;

    const pElement = document.createElement('p');
    pElement.classList.add('description');
    pElement.textContent = description;

    const aElement = document.createElement('a');
    aElement.classList.add('details-btn');
    aElement.href = `/solutions/${_id}/details`;
    aElement.textContent = 'Learn More';

    const divSolutionInfoElement = document.createElement('div');
    divSolutionInfoElement.classList.add('solution-info');
    divSolutionInfoElement.append(h3Element, pElement, aElement);

    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;

    const divSolutionElement = document.createElement('div');
    divSolutionElement.classList.add('solution');
    divSolutionElement.append(
        imgElement,
        divSolutionInfoElement
    )

    return divSolutionElement;
}

function isAuthenticated() {
    return !!localStorage.getItem('email');
}

function saveAuthData(id, email, accessToken) {
    localStorage.setItem('userId', id);
    localStorage.setItem('email', email);
    localStorage.setItem('accessToken', accessToken);
}

function removeAuthData() {
    localStorage.removeItem('userId');
    localStorage.removeItem('email');
    localStorage.removeItem('accessToken');
}
