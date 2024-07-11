class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}

function cats(catsInformation) {
    let cats = [];

    for (const cat of catsInformation) {
        const[name, age] = cat.split(' ');

        cats.push( new Cat(name, age));
    }

    cats.forEach(cat => cat.meow())
}

cats(['Mellow 2', 'Tom 5']);
