// callback func

function myfuncA(x, y, z) {
  let data1 = x + y(20);
  z(`wooo,wow`); // callback func
  console.log(data1);
}

////////////////////////////////////////////////////////////

myfuncA(
  200,
  function (x, y) {
    return x + y;
  },
  (info) => {
    console.log(`IoT ${info}`);
  },
);
