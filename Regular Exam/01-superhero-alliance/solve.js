function solve(input) {
    const numberOfSuperheroes = input.shift();
    const superheroes = {};

    for (let i = 0; i < numberOfSuperheroes; i++) {
        const [name, superpowers, energy] = input.shift().split('-');

        superheroes[name] = {
            superpowers: superpowers.split(','),
            energy: Number(energy),
        }
    }

    let commandData = input.shift();

    while (commandData !== 'Evil Defeated!') {
        const [command, name, ...args] = commandData.split(' * ');

        if (command === 'Use Power') {
            const [superpower, energyRequired] = args;

            if (superheroes[name].superpowers.includes(superpower) && superheroes[name].energy >= energyRequired) {
                superheroes[name].energy -= energyRequired;
                const remainingEnergy = superheroes[name].energy;

                console.log(`${name} has used ${superpower} and now has ${remainingEnergy} energy!`);
            } else {
                console.log(`${name} is unable to use ${superpower} or lacks energy!`);
            }
        } else if (command === 'Train') {
            const trainingEnergy = Number(args[0]);
            const currentEnergyLevel = superheroes[name].energy
            const maximumEnergyLevel = 100;
            let energyGained = 0;

            if (currentEnergyLevel < maximumEnergyLevel) {
                energyGained = trainingEnergy;
                superheroes[name].energy += trainingEnergy;

                if (superheroes[name].energy >= maximumEnergyLevel) {
                    superheroes[name].energy = maximumEnergyLevel;
                    energyGained = maximumEnergyLevel - currentEnergyLevel;
                }

                console.log(`${name} has trained and gained ${energyGained} energy!`);
            } else {
                console.log(`${name} is already at full energy!`);
            }
        } else if (command === 'Learn') {
            const newSuperpower = args[0];

            if (superheroes[name].superpowers.includes(newSuperpower)) {
                console.log(`${name} already knows ${newSuperpower}.`);
            } else {
                superheroes[name].superpowers.push(newSuperpower);
                console.log(`${name} has learned ${newSuperpower}!`);
            }
        }

        commandData = input.shift();
    }

    Object.keys(superheroes)
        .forEach(heroName => {
            console.log(`Superhero: ${heroName}`);
            console.log(`- Superpowers: ${superheroes[heroName].superpowers.join(', ')}`);
            console.log(` - Energy: ${superheroes[heroName].energy}`);
        })
}
