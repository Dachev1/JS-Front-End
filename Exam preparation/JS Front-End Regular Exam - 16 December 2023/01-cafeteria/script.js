function solve(input) {
    const n = input.shift();
    const baristas = [];

    for (let i = 0; i < n; i++) {
        const [name, shift, coffeeTypes] = input.shift().split(' ');

        baristas.push({
            name,
            shift,
            coffeeTypes: coffeeTypes.split(','),
        });
    }

    for (const command of input) {
        if (command.includes('Prepare')) {
            const [_, name, shift, coffeeTypes] = command.split(' / ');

            const searchedBarista = baristas.find(barista => {
                if (barista.name === name &&
                    barista.shift === shift &&
                    barista.coffeeTypes.includes(coffeeTypes)) {
                    return barista;
                }
            });

            if (searchedBarista) {
                console.log(`${name} has prepared a ${coffeeTypes} for you!`);
            } else {
                console.log(`${name} is not available to prepare a ${coffeeTypes}.`);
            }
        } else if (command.includes('Change Shift')) {
            const [_, name, newShift] = command.split(' / ');

            const searchedBarista = baristas.find(barista => barista.name === name);

            if (searchedBarista) {
                searchedBarista.shift = newShift;

                console.log(`${name} has updated his shift to: ${newShift}`);
            }
        } else if (command.includes('Learn')) {
            const [_, name, newCoffeeType] = command.split(' / ');

            const searchedBarista = baristas.find(barista => barista.name === name);

            if (searchedBarista.coffeeTypes.includes(newCoffeeType)) {
                console.log(`${name} knows how to make ${newCoffeeType}.`);
            } else {
                searchedBarista.coffeeTypes.push(newCoffeeType)
                console.log(`${name} has learned a new coffee type: ${newCoffeeType}.`);
            }
        } else {
            baristas.forEach(barista => {
                console.log(`Barista: ${barista.name}, Shift: ${barista.shift}, Drinks: ${barista.coffeeTypes.join(', ')}`);

            })
        }
    }
}
