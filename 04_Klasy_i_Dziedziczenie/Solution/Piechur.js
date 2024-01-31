const Wojownik = require("./Wojownik");

module.exports = class Piechur extends Wojownik {
    constructor(name, age) {
        super(name, age);
        this.weapon = "sword";
    }
}
