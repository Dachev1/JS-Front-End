function solve(input) {
    const n = input.shift();
    const astronauts = [];
    
    for (let i = 0; i < n; i++) {
        
        const [name, oxygenLevel, energy] = input.shift().split(' ');
        
        astronauts.push({
            name,
            oxygenLevel: Number(oxygenLevel),
            energy: Number(energy),
        })
    }
    
    for (const command of input) {
        if (command === 'End') {
            Object.values(astronauts)
            .forEach(astronaut => console.log(`Astronaut: ${astronaut.name}, Oxygen: ${astronaut.oxygenLevel}, Energy: ${astronaut.energy}`))
            return;
        }
        
        if (command.includes('Explore')) {
            const [_, name, neededEnergy] = command.split(' - ');
            
            const astronaut = findAstronautByName(name);
            
            if (astronaut.energy >= neededEnergy) {
                astronaut.energy -= neededEnergy;
                
                console.log(`${name} has successfully explored a new area and now has ${astronaut.energy} energy!`);
            } else {
                console.log(`${name} does not have enough energy to explore!`);
            }
        } else if (command.includes('Refuel')) {
            const [_, name, amont] = command.split(' - ');
            const astronaut = findAstronautByName(name);
            
            const maxLevelEnergy = 200;
            let amountRecovered = amont;
            astronaut.energy += Number(amont);
            
            if (astronaut.energy > maxLevelEnergy) {
                amountRecovered = maxLevelEnergy - (astronaut.energy - amont);
                astronaut.energy = maxLevelEnergy;
            }
            
            console.log(`${name} refueled their energy by ${amountRecovered}!`);
        } else if (command.includes('Breathe')) {
            const [_, name, amont] = command.split(' - ');
            
            const astronaut = findAstronautByName(name);
            
            const maxOxygenLevel = 100;
            let amountRecovered = amont;
            astronaut.oxygenLevel += Number(amont);
            
            if (astronaut.oxygenLevel > maxOxygenLevel) {
                amountRecovered = maxOxygenLevel - (astronaut.oxygenLevel - amont);
                astronaut.oxygenLevel = maxOxygenLevel;
            }
            
            console.log(`${name} took a breath and recovered ${amountRecovered} oxygen!`);
            
        }
    }
    
    function findAstronautByName(name) {
        return astronauts.find(astronaut => astronaut.name === name);
    }
}
