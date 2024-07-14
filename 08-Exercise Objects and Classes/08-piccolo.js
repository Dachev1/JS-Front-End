function piccolo(input) {
    let parkingLot = new Set();
    
    for (const line of input) {
        const[direction, carNumber] = line.split(', ');
        
        if (direction === 'IN') {
            parkingLot.add(carNumber);
        } else {
            parkingLot.delete(carNumber);
        }
    }
    
    if (parkingLot.size === 0) {
        return console.log('Parking Lot is Empty');
    }
    
    Array.from(parkingLot)
    .sort((a, b) => a.localeCompare(b))
    .forEach(carNumber => console.log(carNumber));
}
