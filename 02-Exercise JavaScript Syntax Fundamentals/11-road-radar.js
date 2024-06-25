function roadRadar(speed, area) {
    
    let inLimits = true;
    let speedLimit;
    
    switch (area) {
        case 'motorway':
        speedLimit = 130;
        if (speed > speedLimit) {
            inLimits = false;
        }
        break;
        
        case 'interstate': 
        speedLimit = 90
        if (speed > speedLimit) {
            inLimits = false;
        }
        break;
        
        case 'city': 
        speedLimit = 50;
        if (speed > speedLimit) {
            inLimits = false;
        }
        break;
        
        case 'residential':
        speedLimit = 20;
        if (speed > speedLimit) {
            inLimits = false;
        }
        break;
    }
    
    if (inLimits === true) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        const speedOverLimit = speed - speedLimit;
        let outputText;

        if (speedOverLimit <= 20) {
            outputText = 'speeding'
        } else if (speedOverLimit <= 40) {
            outputText = 'excessive speeding';
        } else {
            outputText = 'reckless driving'
        }
        console.log(`The speed is ${speedOverLimit} km/h faster than the allowed speed of ${speedLimit} - ${outputText}`);
    }
}

roadRadar(120, 'interstate');