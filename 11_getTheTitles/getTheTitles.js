const getTheTitles = function (title, author) {
  const array = [title, author];
//   array.push(title, author);
  const titlesArray = array.slice(1);
  return titlesArray;
};

// Do not edit below this line
module.exports = getTheTitles;
