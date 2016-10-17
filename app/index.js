import 'whatwg-fetch';

// Practicing with "prototypes"

const duck = 'Daffy';
const bunny = 'Bugs Bunny';

console.log(duck.length);

console.log(duck.split(''));

// What if we didn't have "prototypes"

const h = {
  firstName: 'homer',
  lastName: 'simpson',
  age: 39,
  occupation: 'safety inspector',

};

const m = {
  firstName: 'marge',
  lastName: 'simpson',
  age: 36,
  occupation: 'currently unemployed',
};

function createCharacter(firstName, lastName, age, occupation) {
  return {
    firstName, lastName, age, occupation,

    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
}

const m2 = createCharacter('marge', 'simpson', 36, 'currently unemployed');
const h2 = createCharacter('homer', 'simpson', 39, 'safety inspector');

console.log(m2);
console.log(m2.getFullName);
console.log(m2.getFullName());
console.log(h2.getFullName);
console.log(h2.getFullName());

// The "new" keyword and constructor functions

function Simpson(firstName, lastName, age, occupation) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.occupation = occupation;

  // Creates a unique implementation of the "getFullName"
  // function for each instance of Simpson
  // this.getFullName = function () {
  //   return `${this.firstName} ${this.lastName}`;
  // };
}

Simpson.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const m3 = new Simpson('marge', 'simpson', 36, 'currently unemployed');
const h3 = new Simpson('homer', 'simpson', 39, 'safety inspector');

console.log(m3);
console.log(typeof m3); // this still says object
console.log(m3 instanceof Simpson); // Checks to see if m3 is ACTUALLY built based on the Simpson "constructor"
console.log(m3.getFullName);
console.log(m3.getFullName === h3.getFullName); // grabs the shared function from Simpson.prototype
console.log(m3.toString);

// Let's Talk About Classes!!!

import characters from './fringe';

// function Character(data) {
//   this.first = data.firstName;
//   this.last = data.lastName;
//   this.universe = data.universe;
//   this.age = data.age;
//   this.profession = data.profession;
// }
//
// Character.prototype.isTrustworthy = function () {
//   return this.universe === 1;
// };

// Same as prototype and constructor function above
class Character {
  constructor(data) {
    this.first = data.firstName;
    this.last = data.lastName;
    this.universe = data.universe;
    this.age = data.age;
    this.profession = data.profession;
  }

  isTrustworthy() {
    return this.universe === 1 && this.profession !== 'Bioterrorist';
  }
}

// We can still use prototype with class syntax
// While prototype properties are usually functions they don't have to be!!!
Character.prototype.showName = 'Fringe';

const olive = new Character(characters[0]);
console.log(olive.showName);
console.log(olive.isTrustworthy());

// Let's talk about looping

// for (let i = 0; i < characters.length; i++) {
//   const c = new Character(characters[i]);
//
//   console.log(c);
// }

// Same as the for loop above
characters.forEach((item) => {
  const c = new Character(item);


  // Element Setup
  // <div class="character">
  //   <p class="character__name"></p>
  //   <p class="character__profession"></p>
  //   <p class="character__age"></p>
  // </div>
  const el = document.createElement('div');
  el.classList.add('character');
  el.innerHTML = `
    <p class="character__name"></p>
    <p class="character__profession"></p>
    <p class="character__age"></p>`;

  // Element Filling - rendering
  el.querySelector('.character__name').innerText = `${c.first} ${c.last}`; 'Olivia Dunham';
  el.querySelector('.character__profession').innerText = c.profession;
  el.querySelector('.character__age').innerText = c.age;

  // Adding Element to the end of body
  document.body.appendChild(el);

  console.log(c);
});
