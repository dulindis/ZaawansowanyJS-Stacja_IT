## Zadanie 1

Stwórz obiekt ```slider```, taki jak poniżej:

```js
const slider = {
  type: "infinite",
  numberOfItems: 10,
  center: true,
  autoStart: true
}
```

Podstaw do zmiennych ```type``` oraz ```autoStart``` odpowiednie wartości z obiektu ```slider```.

## Zadanie 2

Stwórz funkcję ```showAnimal()```, która przyjmie obiekt:

```js
const cat = {
  name: "Mruczek",
  age: 10,
  getVoice: () => "miau miau"
};
```

I wyświetli w konsoli: `Kot ${name} ma ${catAge} lat i robi ${getVoice()}`.

#### Warunki
- Zmienna `catAge` powinna zawierać wartość z pola `age`
- Przypisanie wartości kluczy obiektu do zmiennych powinno nastąpić już w procesie deklaracji funkcji (nie w jej ciele)
