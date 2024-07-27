function toggle() {
    const buttonElement = document.getElementsByClassName('button');
    const textToShow = document.getElementById('extra');
    
    switch ((buttonElement[0].textContent)) {
        case 'More':
            buttonElement[0].textContent = 'Less';
            textToShow.style.display = 'block';
            break;

        case 'Less':
            buttonElement[0].textContent = 'More';
            textToShow.style.display = 'none';
            break;
    }
}
