//loop and array and object
let data1 = [10, 20, 30, 40];
//การเข้าถึงทุกข้อมูลใน array เพื่อเอาไปใช้งาน
for (let i = 0; i < data1.length; i++) {
  console.log(data1[i] * 100);
}
// วิธีที่2
data1.forEach((value) => {
  console.log(value * 100);
});
//วิธีที่3
data1.map((value) => {
  console.log(value * 100);
});
// วิธีที่4
for (let value of data1) {
  console.log(value * 100);
}
// วิธีที่5
for (let value in data1) {
  console.log(value * 100);
}
