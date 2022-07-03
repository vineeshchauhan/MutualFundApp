const mysql = require("mysql2/promise");

const connect = async () => {
  console.log("connect");
  connection = await mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Kronites0@",
    database: "mutualfunddb",
  });
  return connection;
};

const disconnect = async () => {
  console.log("disconnect");
  connection.end;
};

module.exports = {
  connect,
  disconnect,
};
