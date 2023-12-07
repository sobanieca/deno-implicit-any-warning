/** @typedef {import('./types.d.ts').Dog} Dog*/

/** @type {Dog} */
const dog = { name: 'Marshal' };

console.log(dog);

const printDogName = (d) => {
  console.log(d.name);
}

printDogName(dog);
