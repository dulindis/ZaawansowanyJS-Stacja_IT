const Piechur = require("./Piechur");
const Strzelec = require("./Strzelec");
const Konny = require("./Konny");

module.exports = class Garnizon {
    createSoldier(type, name, age) {
        switch (type) {
            case "piechur": {
                return new Piechur(name, age);
            }
            case "strzelec": {
                return new Strzelec(name, age);
            }
            case "konny": {
                return new Konny(name, age);
            }
            default: {
                return new Piechur(name, age);
            }
        }
    }
}