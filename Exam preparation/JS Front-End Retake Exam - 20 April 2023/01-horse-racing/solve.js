function solve(input) {
    let horseOrder = input.shift().split('|');

    for (const command of input) {
        if (command.includes('Retake')) {
            const [_, overtakingHorse, overtakenHorse] = command.split(' ');

            const overtakingHorseIndex = horseOrder.indexOf(overtakingHorse);
            const overtakenHorseIndex = horseOrder.indexOf(overtakenHorse);

            if (overtakingHorseIndex < overtakenHorseIndex) {
                horseOrder[overtakenHorseIndex] = overtakingHorse;
                horseOrder[overtakingHorseIndex] = overtakenHorse;

                console.log(`${overtakingHorse} retakes ${overtakenHorse}.`);
            }
        } else if (command.includes('Trouble')) {
            const [_, horseName] = command.split(' ');

            const horseIndex = horseOrder.indexOf(horseName);

            if (horseIndex > 0) {
                const behindHorseName = horseOrder[horseIndex - 1];
                const behindHorseIndex = horseOrder.indexOf(behindHorseName);

                horseOrder[behindHorseIndex] = horseName;
                horseOrder[horseIndex] = behindHorseName;

                console.log(`Trouble for ${horseName} - drops one position.`);
            }
        } else if (command.includes('Rage')) {
            const [_, horseName] = command.split(' ');

            const horseIndex = horseOrder.indexOf(horseName);

            horseOrder.splice(horseIndex, 1);

            if (horseIndex === horseOrder.length - 1) {
                horseOrder.push(horseName);
            } else if (horseIndex < horseOrder.length - 1) {
                horseOrder.splice(horseIndex + 2, 0, horseName);
            } else {
                // already first
                horseOrder.push(horseName);
            }

            console.log(`${horseName} rages 2 positions ahead.`);
        } else if (command.includes('Miracle')) {
            const lastHorse = horseOrder.shift();

            horseOrder.push(lastHorse);

            console.log(`What a miracle - ${lastHorse} becomes first.`);
        } else {
            const horseWinner = horseOrder[horseOrder.length - 1];

            console.log(horseOrder.join('->'));
            console.log(`The winner is: ${horseWinner}`);

            return;
        }
    }
}
