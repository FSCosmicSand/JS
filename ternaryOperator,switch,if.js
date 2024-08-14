const a = 10;
// option 1
if (a === 10) {
  console.log("Ok");
} else {
  console.log("Not ok");
}
// option 2
switch (a) {
  case 10:
    console.log("Ok");
    break;
  default:
    console.log("Not Ok");
}
// option 3
a === 10 ? console.log("Ok") : console.log("Not Ok");
