const Wojownik = require("./Wojownik");

module.exports =  class Konny extends Wojownik {
    constructor(name, age) {
        super(name, age);
        this.weapon = "lance";
    }
}
