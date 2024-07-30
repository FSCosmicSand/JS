// 1) classic function

// function BerkSumm(b, c) {
//   let d;
//   d = b + c;
//   return d;
// }

// 2) Functional expression
// const BerkSumm = function (b, c) {
//   let d;
//   d = b + c;
//   return d;
// };

// 3) arrow function
const BerkSumm = (b, c) => {
  let d;
  d = b + c;
  return d;
};

// const BerkSumm = (b, c) => b + c;

const aaa = BerkSumm(10, 5);
console.log(aaa);

// console.log(BerkSumm(10, 5));
