const obj1 = {
  name: "Pit",
  age: 22,
};

function takeObj1(gggg) {
  hhhh = { ...gggg };
  // hhhh = Object.assign({}, gggg)
  console.log(hhhh);
  hhhh.age += 1;
  return hhhh;
  // param.age = param.age + 1
}

console.log(takeObj1(obj1));
