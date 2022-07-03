const XLSX = require("xlsx");
const workbook = XLSX.readFile(
  "E:\\back document\\GitCode\\GitAndGitHub\\AMutualFundApp\\documents\\NSE_EQUITY.csv"
);

const sheet_name_list = workbook.SheetNames;
console.log(sheet_name_list);
const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

const deleteTable = async (connection) => {
  console.log("deleteTable");
  const sql = "delete from equity_info";
  connection.query(sql);
  const sql_reset = "ALTER TABLE equity_info AUTO_INCREMENT = 1";
  connection.query(sql_reset);
};

const insert = async (connection) => {
  console.log("insert");
  const sql = "INSERT into equity_info (equ_name, equ_symbol) values ?";
  const values = [];
  Object.entries(data).forEach((json) => {
    values.push([json[1]["NAME OF COMPANY"], json[1]["SYMBOL"]]);
  });
  return connection.query(sql, [values]);
};

module.exports = {
  insert,
  deleteTable,
};
