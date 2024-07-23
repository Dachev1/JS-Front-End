function sumTable() {
    const tdElementsToSum = document.querySelectorAll('table tbody tr td:nth-child(2):not(#sum)');
    let sum = 0;
    
    
    for (const tdElement of tdElementsToSum) {
        sum += Number(tdElement.textContent);
    }

    document.getElementById('sum').textContent = sum.toFixed(2);
}
