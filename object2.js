// Union objects
const object1 = {
  name1: "Alice",
  age1: 18,
};
const object2 = {
  name2: "Pit",
  age2: 20,
};

const object3 = {
  ...object1,
  ...object2,
};
console.log(object3);
// object1.age = 22;
