//expression func คือการเขียน func  ในรูปแบบนิพจน์
//arrow func
let data1 = () => {
  console.log("weeeee");
};
let data2 = (x, y) => {
  console.log(x + y);
};
let data3 = () => {
  return "wow wooo weeeee";
};
let data4 = (a, b, c) => {
  return a + b + c;
};
//////////////////////
data1();
data2(10, 20);

console.log(data3());
console.log(data4(10, 20, 30));
