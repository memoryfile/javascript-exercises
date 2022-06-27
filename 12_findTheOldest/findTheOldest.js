const findTheOldest = function (array) {
  // const array = ["Carly", "Ray", "Jane"];
  const age = yearOfDeath - yearOfBirth;
  if (Carly.age > Ray.age && Jane.age) {
    return carlyIsOldest();
  }
  if (Ray.age > Carly.age && Jane.age) {
    return rayIsOldest();
  }
  if (Jane.age > Ray.age && Carly.age) {
    return janeIsOldest();
  }
  if (janeIsOldest == true) {
    return "Jane";
  }
  if (rayIsOldest == true) {
    return "Ray";
  }
  if (CarlyIsOldest == true) {
    return "Carly";
  }
};

// Do not edit below this line
module.exports = findTheOldest;
