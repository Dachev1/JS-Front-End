function meetings(input) {

    let meetings = {};

    for (const data of input) {
        const[weekDay, name] = data.split(' ');

        if (meetings[weekDay]) {
            console.log(`Conflict on ${weekDay}!`);
            continue;
        } 

        meetings[weekDay] = name;
        console.log(`Scheduled for ${weekDay}`);
    }

    for (const day in meetings) {
        console.log(`${day} -> ${meetings[day]}`);
    }
}
