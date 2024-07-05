function solve(inputArr) {
    let username = inputArr[0];
    let splitPassword = username.split('');
    splitPassword.reverse();
    
    let password = '';
    for (const chr of splitPassword) {
        password += chr;
    }
    
    let tryCounter = 0;
    for (let i = 1; i < inputArr.length; i++) {
        let currentPassowrdTry = inputArr[i];
        
        if (currentPassowrdTry === password) {
            return  console.log(`User ${username} logged in.`);
        } else {
            tryCounter++;
            
            if (tryCounter === 4) {
                return  console.log(`User ${username} blocked!`);
            }
            console.log('Incorrect password. Try again.');
        }   
    }
}

solve(['sunny','rainy','cloudy','sunny','not sunny']);