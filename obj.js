const obj1 = {
  name: "Pit",
  email: "box@gmail.com",
};

const obj2 = { ...obj1 };
obj2.name = "Alis";

console.log(obj1);
