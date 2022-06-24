const getTheTitles = function(title, author) {
let a = title;
const titleArray = []
// const authorArray = [];
for (const arg of title) {
    titleArray.push(a);
}
return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
