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
        console.log(data.toString());
        co.end();
        console.log('Manjula connected to snek server');
    })

    conn.on('connect', () => {
        console.log('Manjula connected to snek server');
        conn.write("Name: MRD");
        conn.write("Say: Hiiiiii");
    })
    
     

    // interpret incoming data as text
 

  return conn;
};

//module.exports = connect;
module.exports = connect;
