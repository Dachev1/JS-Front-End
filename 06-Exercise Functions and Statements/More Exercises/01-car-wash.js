function calculateTheCleanesOfACar(commands) {
    let percentageOfCleanes = 0;
    for (const command of commands) {
        
        switch (command) {
            case 'soap':
            percentageOfCleanes += 10;
            break;
            
            case 'water':
            percentageOfCleanes *= 1.2;
            break;
            
            case 'vacuum cleaner':
            percentageOfCleanes *= 1.25;
            break;
            
            case 'mud':
            percentageOfCleanes *= 0.9;
            break;
        }
    }
    
    return percentageOfCleanes;
}

function carWash(commands) { 
    console.log(`The car is ${(calculateTheCleanesOfACar(commands)).toFixed(2)}% clean.`);
}

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
