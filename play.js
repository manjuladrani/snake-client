const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
conn.on("connect", () => {
    console.log("you ded cuz you idled");
    // code that does something when the connection is first established
  });
console.log("Connecting ...");
connect();