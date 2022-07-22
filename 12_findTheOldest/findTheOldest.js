// Followed tutorial

const findTheOldest = function(array) {
  return array.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
    return oldestAge < currentAge ? currentPerson : oldest // Condition ? true : false
  })
};


const getAge = function(birth, death) { // Define yearOfBirth & yearOfDeath as birth, death
  if (!death) {                             
    death = new Date().getFullYear(); // Grab current year
  }
  return death - birth;
};

// Import array

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

// Do not edit below this line
module.exports = findTheOldest;
