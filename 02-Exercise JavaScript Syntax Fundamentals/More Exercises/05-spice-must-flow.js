function calculateTotalAmount(yield) {
    let days = 0;
    let extractedSpices = 0;
    const workersConsume = 26;
    let wokersTotalConsume = 0;
    
    while (yield >= 100) {
        extractedSpices += yield  - workersConsume
        wokersTotalConsume += workersConsume;
        days++;
        yield -= 10;
    }
    
    if (extractedSpices > wokersTotalConsume) {
        extractedSpices -= workersConsume;
    }
    
    console.log(days);
    console.log(extractedSpices);
}

calculateTotalAmount(111);