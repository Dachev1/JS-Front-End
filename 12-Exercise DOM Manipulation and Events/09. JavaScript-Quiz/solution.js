function solve() {
    const answerElements = document.querySelectorAll('div.answer-wrap');
    const rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents']
    let rightAnswersCount = 0;
    
    for (const answerElement of answerElements) {
        answerElement.addEventListener('click', (e) => {
            const currentSectionElement = e.currentTarget.parentNode.parentNode.parentNode;
            const answer = e.target.textContent;
            
            if (rightAnswers.includes(answer)) {
                rightAnswersCount++;;
            }

            currentSectionElement.classList.add('hidden');
            currentSectionElement.style.display = 'none';
            
            const nextSection = currentSectionElement.nextElementSibling;
            nextSection.classList.remove('hidden');
            nextSection.style.display = 'block';
            
            
            if (nextSection.id === 'results') {
                const h1Element = nextSection.querySelector('li.results-inner h1');
                
                if (rightAnswersCount === 3) {
                    h1Element.textContent = 'You are recognized as top JavaScript fan!'
                } else {
                    h1Element.textContent = `You have ${rightAnswersCount} right answers`;
                }
            }
        })
    }
}
