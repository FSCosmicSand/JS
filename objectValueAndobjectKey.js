const berkHobbyRating = {
  basketball: 200,
  football: 50,
  pingpong: 100,
  pingpong2: 300,
  pingpong3: 250,
  pingpong4: 1500,
};
// ______________ Max /map (forEach)/ ____________________________
function biggestRating(obj) {
  const arrayValueHobbys = Object.values(obj);
  // console.log(Object.values(obj));

  let maxRating = 0;

  arrayValueHobbys.forEach((arrayValueHobby) => {
    {
      if (maxRating < arrayValueHobby) {
        maxRating = arrayValueHobby;
      }
    }
    return maxRating;
  });

  return maxRating;
}
// ______________ Min /map (forEach)/ ____________________________
function minimumRating(obj) {
  const arrayValueHobbys = Object.values(obj);
  // console.log(Object.values(obj));

  let minRating = 10000;

  arrayValueHobbys.forEach((arrayValueHobby) => {
    {
      if (minRating > arrayValueHobby) {
        minRating = arrayValueHobby;
      }
    }
    return minRating;
  });

  return minRating;
}
console.log("maximum: ", biggestRating(berkHobbyRating));
console.log("minimum: ", minimumRating(berkHobbyRating));
// --------------------------------------------------------
// function biggestRating(obj) {
//   const arrayValueHobbys = Object.values(obj);
//   console.log(Object.values(obj));
//   let maxRating = 0;

//   for (let i = 0; i < Object.values(obj).length; i++) {
//     if (maxRating < arrayValueHobbys[i]) {
//       maxRating = arrayValueHobbys[i];
//     }
//   }
//   return maxRating;
// }

// let j = 0;
// for (let i = 0; i < 10; i++) {
//   j += i;
//   console.log(j);
// }
