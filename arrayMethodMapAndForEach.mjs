import posts from "./date.mjs";

// _________ "map" __________________
// Array Mapping (method - "map")
// myArray1.map((myValue) => {
//   myValue *= 10;
//   console.log(myValue);
// });

// posts.map((post) => {
//   if (post.id === 90 || post.id === 87) console.log(post);
//   // console.log(post);
// });
const arr = [1, 2, 3, 4, 5];
const arr2 = arr.forEach((item) => {
  // return item * 2;
  console.log(item * 2);
});

// console.log(arr2);
