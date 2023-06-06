function a() {
  setTimeout(() => {
    console.log(1);
  }, 0);
  console.log(2);
}

setTimeout(() => {
  console.log(3);
  a();
}, 0);

setTimeout(() => {
  a();
  console.log(4);
}, 0);
