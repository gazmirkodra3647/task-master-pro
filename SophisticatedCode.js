/*
 * Filename: SophisticatedCode.js
 * Description: This code showcases a sophisticated and complex implementation of a virtual pet simulation.
 */

// Class representing a virtual pet
class VirtualPet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.hunger = 50;
    this.thirst = 50;
    this.energy = 100;
    this.happiness = 100;
  }

  feed() {
    this.hunger -= 20;
    this.happiness += 10;
    this.energy += 5;
  }

  water() {
    this.thirst -= 20;
    this.happiness += 5;
    this.energy += 5;
  }

  sleep() {
    this.energy = 100;
    this.happiness += 5;
  }

  play() {
    this.hunger += 5;
    this.thirst += 10;
    this.energy -= 10;
    this.happiness += 20;
  }

  updateState() {
    this.hunger += 2;
    this.thirst += 2;
    this.energy -= 2;
    this.happiness -= 2;
  }

  isHungry() {
    return this.hunger >= 70;
  }

  isThirsty() {
    return this.thirst >= 70;
  }

  isTired() {
    return this.energy <= 30;
  }

  isUnhappy() {
    return this.happiness <= 30;
  }
}

// Class representing the virtual pet owner
class PetOwner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  adopt(pet) {
    this.pets.push(pet);
    console.log(`Congratulations! You adopted a ${pet.type} named ${pet.name}.\n`);
  }

  feedAllPets() {
    this.pets.forEach((pet) => {
      pet.feed();
      console.log(`${pet.name} has been fed.\n`);
    });
  }

  waterAllPets() {
    this.pets.forEach((pet) => {
      pet.water();
      console.log(`${pet.name} has been given water.\n`);
    });
  }

  sleepAllPets() {
    this.pets.forEach((pet) => {
      pet.sleep();
      console.log(`${pet.name} has gone to sleep.\n`);
    });
  }

  playWithAllPets() {
    this.pets.forEach((pet) => {
      pet.play();
      console.log(`${this.name} is playing with ${pet.name}.\n`);
    });
  }

  checkPetStates() {
    this.pets.forEach((pet) => {
      pet.updateState();
      if (pet.isHungry())
        console.log(`${pet.name} is hungry.`);
      if (pet.isThirsty())
        console.log(`${pet.name} is thirsty.`);
      if (pet.isTired())
        console.log(`${pet.name} is tired.`);
      if (pet.isUnhappy())
        console.log(`${pet.name} is unhappy.`);
      console.log('');
    });
  }
}

// Sample usage
const owner = new PetOwner('John');

const dog = new VirtualPet('Rex', 'Dog');
owner.adopt(dog);

const cat = new VirtualPet('Mittens', 'Cat');
owner.adopt(cat);

owner.feedAllPets();
owner.waterAllPets();
owner.sleepAllPets();
owner.playWithAllPets();

console.log('\nChecking pet states...\n');
owner.checkPetStates();

console.log('Program execution completed.');

// ... More sophisticated and complex code goes here ...
// ... This is just a skeleton representation of a virtual pet simulation ...