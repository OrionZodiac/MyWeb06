//expression func คือการเขียน func  ในรูปแบบนิพจน์
//anonymus func
let data1 = function () {
  console.log("weeeee");
};
let data2 = function (x, y) {
  console.log(x + y);
};
let data3 = function () {
  return "wow wooo weeeee";
};
let data4 = function (a, b, c) {
  return a + b + c;
};
//////////////////////
data1();
data2(10, 20);

console.log(data3());
console.log(data4(10, 20, 30));
