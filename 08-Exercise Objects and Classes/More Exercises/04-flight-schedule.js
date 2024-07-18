function solve(input) {
    let flightSchedule = [];
    const flightsOnSpecificSector = input[0];
    const changedStatusesOfFlights = input[1];
    const flightStatus = input[2][0];
    
    for (const line of flightsOnSpecificSector) {
        const[flightNumber, destination] = line.split(' ');
        
        const flight = {
            flightNumber,
            destination,
            status: 'Ready to fly',
        }
        
        flightSchedule.push(flight);
    }
    
    for (const line of changedStatusesOfFlights) {
        const[searchedFlightNumber, newStatus] = line.split(' ');
        
        let getFlight = flightSchedule.find(flight => flight.flightNumber === searchedFlightNumber);
        
        if (getFlight) {
            getFlight.status = newStatus;
        }
    }
    
    flightSchedule
        .filter(flight => flight.status === flightStatus)
        .forEach(flight => console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`));
}
