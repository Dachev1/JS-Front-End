function solve(input) {
    const n = input.shift();
    let riders = [];

    for (let i = 0; i < n; i++) {
        let [rider, fuelCapacity, position] = input.shift().split('|');

        riders.push({
            rider,
            fuelCapacity: Number(fuelCapacity),
            position: Number(position),
        })
    }

    for (const command of input) {

        if (command.includes('StopForFuel')) {
            const [_, riderName, minimumFuel, changedPosition] = command.split(' - ');

            const rider = getRider(riderName);

            if (rider.fuelCapacity < minimumFuel) {
                rider.position = changedPosition;
                console.log(`${riderName} stopped to refuel but lost his position, now he is ${changedPosition}.`);
            } else {
                console.log(`${riderName} does not need to stop for fuel!`);
            }
        } else if (command.includes('Overtaking')) {
            const [_, firstRiderName, secondRiderName] = command.split(' - ');

            const firstRider = getRider(firstRiderName);
            const secondRider = getRider(secondRiderName);

            const firstRiderPosition = firstRider.position;
            const secondRiderPosition = secondRider.position;

            if (firstRiderPosition < secondRiderPosition) {
                firstRider.position = secondRiderPosition;
                secondRider.position = firstRiderPosition;
                console.log(`${firstRiderName} overtook ${secondRiderName}!`);
            }

        } else if (command.includes('EngineFail')) {
            const [_, riderName, lapsLeft] = command.split(' - ');

            riders = riders.filter(rider => rider.rider !== riderName);

            console.log(`${riderName} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
        } else {
            return riders.forEach(rider => {
                console.log(rider.rider);
                console.log(`  Final position: ${rider.position}`);
            })
        }
    }

    function getRider(name) {
        return riders.find(rider => rider.rider === name);
    }
}
