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

const insert = async (connection, data) => {
  console.log("insert");
  const sql = "INSERT into equity_info (equ_name, equ_symbol) values ?";
  const values = [];
  Object.entries(data).forEach((json) => {
    values.push([json[1]["NAME OF COMPANY"], json[1]["SYMBOL"]]);
  });
  return connection.query(sql, [values]);
};

const run = async (data) => {
  connection = await connect();
  await insert(connection, data);
  await disconnect();
};

module.exports = {
  run,
};
