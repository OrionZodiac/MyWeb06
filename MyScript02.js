//variable
var myVariable = "Hello, World!"; // ถ้าเลี่ยงได้ก็เลี่ยงใช้ var เพราะมันเป็น global scope//
let myNumber = 42; //เป็นแบบ local scope ค่าสามารถเปลี่ยนได้//
const myConstant = 3.14; //เป็นแบบ local scope ค่าไม่สามารถเปลี่ยนได้//

{
  var infol = 11;
  let info2 = 22;
  const info3 = 33;
  {
    var value = 111;
    let value2 = 222;
    const value3 = 333;

    value2 = "hello";
  }
}
