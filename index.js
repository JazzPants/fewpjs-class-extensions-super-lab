// Write your classes here
class Tree {
    constructor(species) {
        this.species = species;
    }

    static definition() {
        return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves."
    }
}

class Deciduous extends Tree {
    constructor(species, name) {
        super(species);
        this.name = name;
    }
    static definition() { //new function that overrides original, don't need super.definition
            return `${super.definition()} ${this.name} trees shed their leaves annually.`
    }//this.name more dynamic than just writing "Deciduous"
}

class Evergreen extends Tree {
    constructor(species, name) {
        super(species);
        this.name = name;
    }
    static definition() { //new function that overrides original, don't need super.definition
            return `${super.definition()} Evergreens keep their leaves all year round.`
    }
}