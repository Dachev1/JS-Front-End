function solve(input) {
    const n = input.shift();
    let posse = [];
    
    for (let i = 0; i < n; i++) {
        const [heroName, hp, bullets] = input.shift().split(' ');
        
        posse.push({
            heroName,
            hp: Number(hp),
            bullets: Number(bullets),
        })
    }
    
    for (const command of input) {
        if (command.includes('FireShot')) {
            onFireShot();
        } else if (command.includes('TakeHit')) {
            onTakeHit();
        } else if (command.includes('Reload')) {
            onReload();
        } else if (command.includes('PatchUp')) {
            onPatchUp();
        } else {
            posse.forEach(character => {
                console.log(character.heroName);
                console.log(` HP: ${character.hp}`);
                console.log(` Bullets: ${character.bullets}`);
            })
        }
        
        // Help functions
        function onFireShot() {
            const [_, characterName, target] = command.split(' - ');
            
            const character = getCharacter(characterName);
            
            if (character.bullets > 0) {
                character.bullets--;
                console.log(`${characterName} has successfully hit ${target} and now has ${character.bullets} bullets!`);
            } else {
                console.log(`${characterName} doesn't have enough bullets to shoot at ${target}!`);
            }
        }
        
        function onTakeHit() {
            const [_, characterName, damage, attacker] = command.split(' - ');
            
            const character = getCharacter(characterName);
            
            character.hp -= Number(damage);
            
            if (character.hp > 0) {
                console.log(`${characterName} took a hit for ${damage} HP from ${attacker} and now has ${character.hp} HP!`);
            } else {
                const updateArr = posse.filter(character => character.heroName !== characterName);
                console.log(`${characterName} was gunned down by ${attacker}!`);
                posse = updateArr;
            }
        }
        
        function onReload() {
            const [_, characterName] = command.split(' - ');
            
            const character = getCharacter(characterName);
            const maxBulletCapacity = 6;
            
            if (character.bullets < maxBulletCapacity) {
                const bulletsReloaded = maxBulletCapacity - character.bullets;
                character.bullets = maxBulletCapacity;
                
                console.log(`${characterName} reloaded ${bulletsReloaded} bullets!`);
            } else {
                console.log(`${characterName}'s pistol is fully loaded!`);
            }
        }
        
        function onPatchUp() {
            const [_, characterName, amount] = command.split(' - ');
            
            const character = getCharacter(characterName);
            const maxHpCapacity = 100;
            
            character.hp += Number(amount);
            
            if (character.hp < maxHpCapacity) {
                console.log(`${characterName} patched up and recovered ${amount} HP!`);
            } else {
                character.hp = maxHpCapacity;
                console.log(`${characterName} is in full health!`);
            }
        }
        
        function getCharacter(name) {
            return posse.find(character => character.heroName === name);
        }
    }
}
