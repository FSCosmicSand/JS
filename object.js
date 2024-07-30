const user = {
  id: 10,
  name: "Bob The Box",
  email: "BobTBox@gmail.com",

  // function inner object
  comments: function Berk(b) {
    b += 1;
    // b = b + 1
    return b;
  },
};
// console.log(user.email);

// console.log(user.comments(10));

objectA = {
  id: 10,
  name: "Berk",
  surname: "Ucar",
};

// objectB = objectA;
//

function changeProperity(value) {
  objectA.email = value;
}

function deleteProperity(value) {
  delete value;
}

// changeProperity("berg@gmail.com");

deleteProperity(objectA.email);

console.log(objectA);

// console.log;
// c: "deleted",

// console.log(objectA.c);
// Added
// objectA.d = 1;

// // Change
// objectA.a = 30;

// // Delete
// delete objectA.b;
// // console.log(objectA);

// objectB = {
//   a: 5638,
//   b: function BerkSumm(b, c) {
//     let d;
//     d = b + c;
//     console.log(d);
//   },
// };
