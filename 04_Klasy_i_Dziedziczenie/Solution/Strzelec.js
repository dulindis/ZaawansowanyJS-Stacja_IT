const Wojownik = require("./Wojownik");

module.exports = class Strzelec extends Wojownik {
    constructor(name, age) {
        super(name, age);
        this.weapon = "bow";
    }
}
