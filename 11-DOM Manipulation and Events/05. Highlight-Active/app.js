function focused() {
    const inputElements = document.getElementsByTagName('input');

    Array.from(inputElements).forEach(input => {
        input.addEventListener('focus', (e) => {
            e.target.parentNode.classList.add('focused');
        })
    })

    Array.from(inputElements).forEach(input => {
        input.addEventListener('blur', (e) => {
            e.target.parentNode.classList.remove('focused');
        })
    })
}
