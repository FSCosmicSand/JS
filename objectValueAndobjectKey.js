const berkHobbyRating = {
  basketball: 200,
  football: 50,
  pingpong: 100,
  pingpong2: 300,
  pingpong3: 250,
  pingpong4: 1500,
};

function biggestRating(obj) {
  const arrayValueHobbys = Object.values(obj);
  console.log(Object.values(obj));
  let maxRating = 0;

  for (let i = 0; i < Object.values(obj).length; i++) {
    if (maxRating < arrayValueHobbys[i]) {
      maxRating = arrayValueHobbys[i];
    }
  }
  return maxRating;
}

console.log(biggestRating(berkHobbyRating));

// let j = 0;
// for (let i = 0; i < 10; i++) {
//   j += i;
//   console.log(j);
// }
