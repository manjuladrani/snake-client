
let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
let letter;

const handleUserInput = function (key) {

  // your code here

  if (key === w) {
     letter.write("Move: Up");
  } else if (key === a) {
      letter.write("Move: left");
  } else if (key === s) {
      letter.write("Move: down");
  } else if (key === d) {
      letter.write("Move: righr");
  } else {
      letter.write("Sat: Whoooooo");
  }



};

module.exports = setupInput;