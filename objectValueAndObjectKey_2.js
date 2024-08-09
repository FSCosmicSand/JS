const berkHobbyRating = {
  basketball: 200,
  football: 50,
  pingpong: 100,
  pingpong2: 300,
  pingpong3: 250,
  pingpong4: 1500,
};
// ______________ Sort /map (forEach)/ ____________________________
function sortRating(obj) {
  const arrayValueHobbys = Object.values(obj);
  // console.log(Object.values(obj));

  return arrayValueHobbys.sort(compareNumbers);
  arrayValueHobbys.find;
}

function compareNumbers(a, b) {
  return a - b;
}
console.log("sorting array: ", sortRating(berkHobbyRating));
