const berkHobbyRating = {
  basketball: 20,
  football: 16,
  pingpong: 14,
  pingpong2: 15,
  pingpong3: 25,
  pingpong4: 24,
};
// ______________ find /map (forEach)/ ____________________________
function findRating(obj) {
  const arrayValueHobbys = Object.values(obj);
  // console.log(Object.values(obj));

  return arrayValueHobbys.find((item) => item === 14);
}

console.log(
  "find any value by condition in array: ",
  findRating(berkHobbyRating)
);
