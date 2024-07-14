class Hero {
    constructor(name, level, ...items) {
        this.name = name;
        this.level = level;
        this.items = items;
    }
    
    printInfo() {
        console.log(`Hero: ${this.name}`);
        console.log(`level => ${this.level}`);
        console.log(`items => ${this.items.join(', ')}`);
    }
}

function inventory(herosInformation) {
    let heroes = [];
    
    for (const hero of herosInformation) {
        const[name, level, itmes] = hero.split(' / ');
        
        heroes.push(new Hero(name, level, itmes));
    }
    
    heroes
    .sort((firsrHero, secondHero) => firsrHero.level - secondHero.level)
    .forEach(hero => hero.printInfo());;    
}
