function cookingByNumbers(inputNumber, ...operations) {
    let number = Number (inputNumber);
    
    for (let i = 0; i < operations.length; i++) {
        
        switch (operations[i]) {
            case 'chop':
            number /= 2;
            break;
            
            case 'dice':
            number = Math.sqrt(number);
            break;
            
            case 'spice':
            number++;
            break;
            
            case 'bake':
            number *= 3;
            break;
            
            case 'fillet':
            number -= (number * 0.20);
            break;
        }

        console.log(number);
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');