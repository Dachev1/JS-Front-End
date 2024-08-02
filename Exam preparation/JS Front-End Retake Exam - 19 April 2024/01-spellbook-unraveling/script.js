function solve(input) {
    let string = input.shift();
    let commands = input;

    for (const command of commands) {
        if (command === 'End') {
            return console.log(`The concealed spell is: ${string}`);
        }

        if (command === 'RemoveEven') {
            let stringWithOutEven = string
                .split('')
                .filter((_, i) => i % 2 === 0)
                .join('');

            string = stringWithOutEven;
        } else if (command.includes('TakePart')) {
            const startIndex = Number(command.split('!')[1]);
            const endIndex = Number(command.split('!')[2]);

            const part = string.substring(startIndex, endIndex);
            string = part;
        } else if (command.includes('Reverse')) {
            const substring = command.split('!')[1];

            if (string.includes(substring)) {
                const substringStartIndex = Number(string.indexOf(substring.charAt(0)));
                const substringEndIndex = Number(string.indexOf(substring.charAt(substring.length - 1)));

                string = string.replace(string.substring(substringStartIndex, substringEndIndex + 1), '');
                string += substring.split('').reverse().join('');
            } else {
                console.log('Error');
                continue;
            }
        }

        console.log(string);
    }
}

solve(["hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m", 
    "TakePart!31!42",
    "RemoveEven",
    "Reverse!anim",
    "Reverse!sad",
    "End"])
    