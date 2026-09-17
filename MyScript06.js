//function 4
// no para no return
function myfunc() {
  console.log("AAA");
  console.log("BBB");
}

// have para no return
function myfuncA(a, b) {
  console.log(a + b);
}

// no para has return
function myfuncB() {
  console.log("wow,woo,wee");
  return "uwu";
}

// have para has return
function myfuncC(fullname, age) {
  return `my name is ${fullname} i am ${age} years old`;
}
///////////////////////////////////
// call function แบบไม่มี return เรียกใช้ได้เลย
myfunc();
myfuncA(20, 100); // ข้อมูลส่งให้ para เรีบก argument

// call function แบบมี return ควรเขียนโค้ดที่มีการเอาค่าที่ return ไปใช้งาน
console.log(myfuncB());

let data = myfuncC("Somchai", 20); // ข้อมูลที่ส่งให้ parameter เรียก argument
console.log(data);
