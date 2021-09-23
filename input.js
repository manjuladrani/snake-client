
let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {

  // your code here
  if (key === '\u0003') {
    process.exit();
  }
  if (key === w) {
     connection.write("Move: Up");
  } else if (key === a) {
      connection.write("Move: left");
  } else if (key === s) {
      connection.write("Move: down");
  } else if (key === d) {
      connection.write("Move: righr");
  } else {
      letter.write("Sat: Whoooooo");
  }



};

module.exports = setupInput;
