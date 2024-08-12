async function lockedProfile() {
    const baseURL = 'http://localhost:3030/jsonstore/advanced/profiles';

    const profilesResponse = await fetch(baseURL);
    const profiles = await profilesResponse.json();

    const mainElement = document.getElementById('main');
    mainElement.innerHTML = '';

    let counter = 1;
    Object.values(profiles)
        .forEach(profile => {

            let username = profile.username;
            let email = profile.email;
            let age = profile.age;

            const divProfile = document.createElement('div');
            divProfile.className = 'profile';

            let profileHTML = `
                	<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user${counter}Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user${counter}Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user${counter}Username" value="${username}" disabled readonly />
				<div class="user${counter}HiddenFields">
					<hr>
					<label>Email:</label>
					<input type="email" name="user${counter}Email" value="${email}" disabled readonly />
					<label>Age:</label>
					<input type="email" name="user${counter}Age" value="${age}" disabled readonly />
				</div>
				
				<button>Show more</button>
                `

            divProfile.innerHTML = profileHTML;
            divProfile.querySelector('div').style.display = 'none';
            mainElement.appendChild(divProfile);


            const profileElements = document.querySelectorAll('.profile');

            for (let profileElement of profileElements) {
                const showButtonElement = profileElement.querySelector('button');
                const lockRadioElement = profileElement.querySelector('input[type=radio][value=lock]');

                showButtonElement.addEventListener('click', () => {
                    if (lockRadioElement.checked) {
                        return;
                    }

                    const additionalInformationElement = showButtonElement.previousElementSibling;

                    if (showButtonElement.textContent === 'Show more') {
                        additionalInformationElement.style.display = 'block';
                        showButtonElement.textContent = 'Hide it';
                    } else {
                        additionalInformationElement.style.display = 'none';
                        showButtonElement.textContent = 'Show more';
                    }
                });
            }

            counter += 1;
        })
}
