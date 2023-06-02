import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0;
let lineMax;
const stack = [];
const outputLog = [];
rl.on("line", function (line) {
  lineCnt++;
  if (!lineMax) {
    lineMax = Number(line);
  } else {
    switch (true) {
      case line.split(" ")[0] === "push":
        stack.push(Number(line.split(" ")[1]));
        break;
      case line.split(" ")[0] === "top":
        outputLog.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
        break;
      case line.split(" ")[0] === "size":
        outputLog.push(stack.length);
        break;
      case line.split(" ")[0] === "pop":
        const pop = stack.pop();
        outputLog.push(pop ?? -1);
        break;
      case line.split(" ")[0] === "empty":
        outputLog.push(stack.length === 0 ? 1 : 0);
        break;
    }
  }

  if (lineCnt === lineMax + 1) {
    rl.close();
  }
  // console.log("hello !", line);
}).on("close", function () {
  console.log(outputLog.join("\n"));
  process.exit();
});
