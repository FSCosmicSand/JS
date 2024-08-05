// _________ "slice" __________________
// const arr1 = ["a", "bb", 123, true, "apple"];
// const arr2 = arr1.slice(-2);
// console.log(arr2);

// _________ "splice" __________________
const arr3 = [0, 2, 3, 4, 5, 6, 7, 8];
console.log("length 1:", arr3.length);
// what was will be deleted?
const arr4 = arr3.splice(1, 3, 1);
arr3.splice(arr3.length, 0, 9);
console.log("arr4:", arr4);
// what is leaves in array.
console.log("arr3:", arr3);
console.log("length 2:", arr3.length);
