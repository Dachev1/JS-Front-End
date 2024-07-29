function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const resultElement = document.getElementById('result');

    gradient.addEventListener('mousemove', (e) => {
        const percent = Math.floor((e.offsetX / e.target.clientWidth) * 100);
        resultElement.textContent = percent + '%';
    })
}
