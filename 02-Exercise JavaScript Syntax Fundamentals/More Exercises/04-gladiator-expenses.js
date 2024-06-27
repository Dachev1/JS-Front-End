function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helemntsCount = 0;
    let swordsCount = 0;
    let shieldsCount = 0;
    let armorsCount = 0;
    
    for (let i = 1; i <= lostFightsCount; i++) {
        if (i  % 2 === 0) {
            helemntsCount++;
        }  
        
        if (i % 3 === 0)  {
            swordsCount++;
        } 
        
        if (i % 2 === 0 && i % 3 === 0)  {
            shieldsCount++;
            
            if (shieldsCount % 2 === 0)  {
                armorsCount++;
            }

        } 
    }
    
    let expenses = (helmetPrice * helemntsCount) +  (swordPrice * swordsCount) +
    (shieldPrice * shieldsCount) + (armorPrice * armorsCount);
    
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(23,12.50, 21.50, 40, 200)