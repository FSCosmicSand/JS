const berkHobbyRating = {
  basketball: 200,
  football: 50,
  pingpong: 100,
  pingpong2: 300,
  pingpong3: 250,
  pingpong4: 1500,
};
// ______________ find /map (forEach)/ ____________________________
function findRating(obj) {
  const arrayValueHobbys = Object.values(obj);
  // console.log(Object.values(obj));

  return arrayValueHobbys.find((item) => item === 200);
}

console.log(
  "find any value by condition in array: ",
  findRating(berkHobbyRating)
);
