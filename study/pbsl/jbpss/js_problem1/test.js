function testcallback(str, cb) {
  const pattern1 = "나는 ";
  const pattern2 = " 하고싶다";

  cb(pattern1 + str + pattern2);
}
testcallback("게임", (e) => {
  console.log(e);
});

// const un = undefined

// console.log(!isNaN(un))
