function solve() {
    const inputElements = document.querySelectorAll('tbody tr td input');
    const checkButtonElement = document.querySelector('tfoot tr td button:first-of-type')
    const table = document.querySelector('table');
    const outputTextElement = document.querySelector('#check p');
    
    checkButtonElement.addEventListener('click', () => {
        const board = getBoard(inputElements);
        
        const row = {};
        const column = {};
        const box = {};
        
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const value = board[i][j];
                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                
                if (row[`${i}-${value}`] || column[`${j}-${value}`] || boxIndex[`${boxIndex}-${value}`]) {
                    return lose();
                }
                
                row[`${i}-${value}`] = true;
                column[`${j}-${value}`] = true;
                box[`${boxIndex}-${value}`] = true;
            }
        }
        
        return won();
    });
    
    const clearButtonElement = document.querySelector('tfoot tr td button:last-of-type');
    
    clearButtonElement.addEventListener('click', () => {
        const inputElements = document.querySelectorAll('tbody tr td input');
        inputElements.forEach(input => input.value = '');
        table.style.border = 'none';
        outputTextElement.textContent = '';
    });
    
    function lose() {
        table.style.border = '2px solid red';
        outputTextElement.textContent = 'NOP! You are not done yet...';
        outputTextElement.style.color = 'red';
    }
    
    function won() {
        table.style.border = '2px solid green';
        outputTextElement.textContent = 'You solve it! Congratulations!';
        outputTextElement.style.color = 'green';
    }
    
    function getBoard(elements) {
        let board = [];
        let row = 3;
        let col = 3;
        let cell = 0;
        
        for (let i = 0; i < row; i++) {
            board[i] = [];
            for (let j = 0; j < col; j++) {
                board[i][j] = elements[cell++].value;
            }
        }
        
        return board
    }
}
