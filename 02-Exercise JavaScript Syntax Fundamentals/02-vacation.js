function calculateVacationPrice(peopleCount, groupType, dayOfWeek) {
    let totalPrice;
    let priceForSinglePerson;
    
    switch (groupType) {
        case 'Students':
        if (dayOfWeek == 'Friday') {
            priceForSinglePerson = 8.45;
        } else if (dayOfWeek == 'Saturday') {
            priceForSinglePerson = 9.80;
        } else if (dayOfWeek == 'Sunday') {
            priceForSinglePerson = 10.46;
        }
        break;

        case 'Business':
            if (dayOfWeek == 'Friday') {
                priceForSinglePerson = 10.90;
            } else if (dayOfWeek == 'Saturday') {
                priceForSinglePerson = 15.60;
            } else if (dayOfWeek == 'Sunday') {
                priceForSinglePerson = 16;
            }
            break;

        case 'Regular': 
        if (dayOfWeek == 'Friday') {
            priceForSinglePerson = 15;
        } else if (dayOfWeek == 'Saturday') {
            priceForSinglePerson = 20;
        } else if (dayOfWeek == 'Sunday') {
            priceForSinglePerson = 22.50;
        }
        break;
    }

    totalPrice = peopleCount * priceForSinglePerson;

    if (groupType == 'Students' && peopleCount >= 30) {
        totalPrice *= 0.85;
    } 

    if (groupType == 'Business' && peopleCount >= 100) {
        totalPrice -= priceForSinglePerson * 10;
    }

    if (groupType == 'Regular' && (peopleCount >= 10 && peopleCount <= 20)) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

calculateVacationPrice(30, 'Students', 'Sunday');
calculateVacationPrice(40, 'Regular', 'Saturday');