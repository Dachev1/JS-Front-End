function solve(input) {
    let leadersArmies = {};

    for (const line of input) {
        if (line.includes('arrives')) {
            const leaderName = line.split(' arrives')[0];

            leadersArmies[leaderName] = [];
        } else if (line.includes(',')) {
            const leader = line.split(': ')[0];
            const [armyName, armyCount] = line.split(': ')[1].split(', ');

            if (leadersArmies.hasOwnProperty(leader)) {
                leadersArmies[leader].push({
                    armyName,
                    armyCount: Number(armyCount),
                });
            }
        } else if (line.includes('+')) {
            const armyNameToFind = line.split(' + ')[0];
            const armyCountToAdd = line.split(' + ')[1];

            for (const leader in leadersArmies) {
                let findArmy = leadersArmies[leader].find(army => army.armyName === armyNameToFind);

                if (findArmy) {
                    findArmy.armyCount += Number(armyCountToAdd);
                }
            }
        } else if (line.includes('defeated')) {
            const leader = line.split(' defeated')[0];

            delete leadersArmies[leader];
        }
    }

    let armiesByCount = {};

    for (const [leader, armies] of Object.entries(leadersArmies)) {
        let totalArmyCount = 0;
        let output = [];

        let lastArmyCount = 0;
        for (const { armyName, armyCount } of armies) {
            if (armyCount > lastArmyCount) {
                output.unshift(`>>> ${armyName} - ${armyCount}`)
            } else {
                output.push(`>>> ${armyName} - ${armyCount}`)
            }

            totalArmyCount += armyCount;
            lastArmyCount = armyCount;
        }
        output.unshift(`${leader}: ${totalArmyCount}`);
        armiesByCount[totalArmyCount] = output;
    }

    let sortedArmies = Object.entries(armiesByCount)
        .sort((a, b) => b[0] - a[0]);

    for (const [_, army] of sortedArmies) {
        army.forEach(army => console.log(army));
    }
}
