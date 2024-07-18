function solve(input) {
    let garages = {};
    
    for (const line of input) {
        let garageNumber = line.split(' - ')[0];
        let carInfo = line.split(' - ')[1];
        
        if (!garages.hasOwnProperty(garageNumber)) {
            garages[garageNumber] = [];
        }
        
        let car = {};
        
        for (const property of carInfo.split(', ')) {
            const[key, value] = property.split(': ');
            car[key] = value;
        }
        
        garages[garageNumber].push(car);
    }
    
    for (const [garageNumber, carsInGarage] of Object.entries(garages)) {
        console.log(`Garage № ${garageNumber}`);
        
        for (const car of carsInGarage) {
            let result = [];

            for (const property in car) {
                if (result.length === 0) {
                    result.push(`--- ${property} - ${car[property]}`)
                } else {
                    result.push(`${property} - ${car[property]}`)
                }
            }

            console.log(result.join(', '));
        }
    }
}
