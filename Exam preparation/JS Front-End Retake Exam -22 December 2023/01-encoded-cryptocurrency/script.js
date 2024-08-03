function solve(input) {
    let message = input.shift();
    
    for (const command of input) {
        if (command === 'TakeEven') {
            const stringOnlyEven = message
            .split('')
            .filter((_, i) => i % 2 === 0)
            .join('');
            
            message = stringOnlyEven;
        } else if (command.includes('ChangeAll')) {
            const [_, substring, replacement] = command.split('?');
            
            // I do it with while loop, because JUDGE doesn't support replaceALL
            while (message.includes(substring)) {
                message = message.replace(substring, replacement);
            }
            
        } else if (command.includes('Reverse')) {
            const [_, substring] = command.split('?');
            
            if (message.includes(substring)) {
                message = message.replace(substring, '');
                message += substring.split('').reverse().join('');
            } else {
                console.log('error');
                continue;
            }
        } else {
            return console.log(`The cryptocurrency is: ${message}`);
        }
        
        console.log(message);
    }
}
