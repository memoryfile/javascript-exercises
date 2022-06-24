const findTheOldest = function (array) {
//   const array = ["Carly", "Ray", "Jane"];
  const initialValue = 0;
  const ageOfPeople = array.reduce(
    (yearofDeath, yearofBirth) => yearofDeath - yearofBirth,
    initialValue
  );
  return ageOfPeople(array);
};

// Do not edit below this line
module.exports = findTheOldest;
