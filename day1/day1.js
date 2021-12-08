const fs = require("fs");

// fs.readFile("./day1In.txt", (err, data) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log("Async", data.toString("utf8"));
// });

let file = fs.readFileSync("./day1In.txt");
file = file.toString();
// console.log("file", file);

function findFloor(input) {
  console.time("santa-time");
  let currentFloor = 0;
  for (let i = 0; i <= input.length; i++) {
    if (input.charAt(i) === "(") {
      currentFloor += 1;
    } else if (input.charAt(i) === ")") {
      currentFloor -= 1;
    }
  }
  console.log(currentFloor);
  console.timeEnd("santa-time");
  return currentFloor;
}

// findFloor(file);
// findFloor("(((");

// PART TWO

function findBasementMove(input) {
  let currentFloor = 0;
  let counter = 0;
  for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) === "(") {
      currentFloor += 1;
    } else if (input.charAt(i) === ")") {
      currentFloor -= 1;
    }
    if (currentFloor < 0) {
      counter = i + 1;
      break;
    }
  }
  let result = counter;
  console.log(result);
  return result;
}

// as soon as currentFloor < 0; log the position of the last input(i) (charAt) (PLUS ONE).

findBasementMove(file);
// findBasementMove("()())");
