const Garnizon = require("./Solution/Garnizon");

const order = [
    {type: "strzelec", name: "Jan", age: 23},
    {type: "strzelec", name: "Jan2", age: 23},
    {type: "strzelec", name: "Jan3", age: 23},
    {type: "strzelec", name: "Jan4", age: 23},
    {type: "konny", name: "Jan", age: 23},
    {type: "konny", name: "Jan2", age: 23},
    {type: "konny", name: "Jan3", age: 23},
    {type: "piechur", name: "Jan", age: 23},
    {type: "piechur", name: "Jan2", age: 23},
    {type: "piechur", name: "Jan3", age: 23},
];

function createSoldiers(powolania) {
    const garnizon = new Garnizon();
    const army = [];
    powolania.forEach((el) => {
        const newWarrior = garnizon.createSoldier(el.type, el.name, el.age);
        army.push(newWarrior);
    });

    return army;
}

console.log(createSoldiers(order));


