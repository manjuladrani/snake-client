const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server


const connect = function () {
    const conn = net.createConnection({
      host: IP,
      port: PORT
    });
    conn.setEncoding("utf8");

    conn.on('data', (data) => {
        console.log('Server Says: ', data);
    })

    conn.on('connect', () => {
        console.log('Server Says: ', 'successfully connected to the snake server');
    })
    conn.on('connect', () => {
        conn.write("Name: SNK");
    })
     

    // interpret incoming data as text
 

  return conn;
};

//module.exports = connect;
module.exports = connect;