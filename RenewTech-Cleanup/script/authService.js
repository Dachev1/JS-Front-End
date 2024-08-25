const baseUrl = 'http://localhost:3030';

export async function login(email, password) {
    const response = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        })
    });

    const authData = await response.json();
    return authData;
}

export async function register(email, password, rePassword) {
    const response = await fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
            rePassword,
        })
    });

    const authData = await response.json();
    return authData;
}

export async function getSolutions() {
    const response = await fetch(`${baseUrl}/data/solutions`);
    const data = await response.json();

    return data;
}

export async function addSolution(type, imageUrl, description, learnMore, token) {
    const response = await fetch(`${baseUrl}/data/solutions`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': `${token}`,
        },
        body: JSON.stringify({
            type,
            imageUrl,
            description,
            learnMore,
        })
    });

    return await response.json();
}

export async function getOne(solutionId) {
    const response = await fetch(`${baseUrl}/data/solutions/${solutionId}`);
    const result = await response.json();

    return result;

}

export function getAuth() {
    const userId = localStorage.getItem('userId');
    const email = localStorage.getItem('email');
    const accessToken = localStorage.getItem('accessToken');

    const authData = {
        userId,
        email,
        accessToken,
    };

    return authData;
}

export async function editSolution(type, imageUrl, description, learnMore, token, id) {
    await fetch(`${baseUrl}/data/solutions/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': `${token}`,
        },
        body: JSON.stringify({
            type,
            imageUrl,
            description,
            learnMore,
        })
    });
}

export async function deleteSolution(token, id) {
    await fetch(`${baseUrl}/data/solutions/${id}`, {
        method: 'DELETE', 
        headers: {
            'X-Authorization': `${token}`,
        },
    })
}

export async function likeSolution(solutionId) {
    // TODO
}
