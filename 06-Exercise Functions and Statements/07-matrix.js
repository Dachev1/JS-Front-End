function printMatrix(n) {
    for (let i = 1; i <= n; i++) {
        let row = [];
        for (let i = 1; i <= n; i++) {
            row.push(n);
        }
        console.log(row.join(' '));
    }
}

printMatrix(7);