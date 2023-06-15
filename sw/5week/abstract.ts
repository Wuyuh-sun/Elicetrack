abstract class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  abstract bark(): void;
}

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  bark() {
    console.log(`${this.name}(Dog-${this.species}) : BOWWOW!`);
  }
}

class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  bark() {
    console.log(`${this.name}(Cat-${this.species}) : meow!`);
  }
}

const daisy: Dog = new Dog('Daisy', 'Bulldog');
daisy.bark();

const cheese: Cat = new Cat('Cheese', 'Bengal');
cheese.bark();
