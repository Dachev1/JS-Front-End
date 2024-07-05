function calculate(minedGoldAmountForDay) {
    const bitcoinPrice = 11949.16;
    const oneGramOfGold = 67.51;
    let money = 0;
    let dayOfTheFirstPurchasedBitCoin = 0;
    let bitcoins = 0;
    let day = 0;
    
    for (let i = 0; i < minedGoldAmountForDay.length; i++) {
        day = i + 1;
        let goldGrams = minedGoldAmountForDay[i];
        
        if (day % 3 === 0) {
            goldGrams *= 0.70;
        } 
        money += oneGramOfGold * goldGrams;
        
        
        
        while (money >= bitcoinPrice) {
            money -= bitcoinPrice;
            bitcoins++;
        }
        
        if (dayOfTheFirstPurchasedBitCoin === 0 && bitcoins > 0) {
            dayOfTheFirstPurchasedBitCoin = day;
        }
    }
    
    console.log(`Bought bitcoins: ${bitcoins}`);
    
    if (dayOfTheFirstPurchasedBitCoin !== 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfTheFirstPurchasedBitCoin}`);
    }
    
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

calculate([3124.15, 504.212, 2511.124]);