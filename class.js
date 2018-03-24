class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi! My name is ${this.name} and I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
        console.log('wizard', this);
    }
    play() {
        console.log(`Boom! My class is a ${this.type}`);
    }
}

const wizard1 = new Wizard('Gandalf', 'Wizard');
const wizard2 = new Wizard('Saruman', 'Dark Wizard');

class Barbarian extends Player {
    constructor(name, type) {
        super(name, type);
    }
    roar() {
        console.log(`I am ${this.name} the ${this.type}! Hear me ROAR!`)
    }

}

const barbarian1 = new Barbarian('Conan', 'Barbarian');
const barbarian2 = new Barbarian('Wulfgar', 'Northern Barbarian');