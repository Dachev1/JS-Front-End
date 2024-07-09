function pointsValidation(points) {
    const x1 = points[0];
    const y1 = points[1];
    const x2 = points[2];
    const y2 = points[3];

    checker(x1, y1, 0, 0);
    checker(x2, y2, 0, 0);
    checker(x1, y1, x2, y2);
}

function checker(x1, y1, x2, y2) {
    const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    const validString = Number.isInteger(distance) ? 'valid' : 'invalid';
    
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${validString}`);
}

pointsValidation([2, 1, 1, 1]);
