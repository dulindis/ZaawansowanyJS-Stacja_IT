//Zadanie 1
const slider = {
    type: "infinite",
    numberOfItems: 10,
    center: true,
    autoStart: true
  }

  const {type, autoStart} = slider;
  console.log(type, autoStart);

//Zadanie 2
const cat = {
    name: "Mruczek",
    age: 10,
    getVoice: () => "miau miau"
  };
const showAnimal = ({name = "Kotek", age: catAge, getVoice}) => {
    console.log(`Kot ${name} ma ${catAge} lat i robi ${getVoice()}.`);
}

showAnimal(cat);