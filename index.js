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

//this actually violates substition principle, use definitionTree() in a grandparent class

console.log(Deciduous);

class Evergreen extends Tree {
    constructor(species, name) {
        super(species);
        this.name = name;
    }
    static definition() { //new function that overrides original, don't need super.definition
            return `${super.definition()} Evergreens keep their leaves all year round.`
    }
}


/*

// Write your classes here
class Tree {
    constructor(species) {
        this.species = species;
    }

    static definitionTree() {
        return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves."
    }
}

class Deciduous extends Tree {
    constructor(species, name) {
        super(species);
        this.name = name;
    }
    static definition() { //new function that overrides original, don't need super.definition
            return `${definitionTree()} ${this.name} trees shed their leaves annually.`
    }//this.name more dynamic than just writing "Deciduous"
}

//this actually violates substition principle, use definitionTree() in a grandparent class

console.log(Deciduous);

class Evergreen extends Tree {
    constructor(species, name) {
        super(species);
        this.name = name;
    }
    static definition() { //new function that overrides original, don't need super.definition
            return `${definitionTree()} Evergreens keep their leaves all year round.`
    }
}

*/

/*
function User(name, email) {
    this.name = name;
    this.email = email;
}

let lauren = new User("Lauren", "lauren@example.com");
lauren.name //=> "Lauren"
*/

//lauren is the new context, so we can use this.name, and this.email inside lauren object!