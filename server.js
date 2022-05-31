const XLSX = require("xlsx");
const database = require("./DB/database");
const workbook = XLSX.readFile(
  "E:\\back document\\Personal\\The mutual fund app\\NSE_EQUITY.csv"
);

const sheet_name_list = workbook.SheetNames;
console.log(sheet_name_list);
const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
const json = data[0];
console.log(json);
/* let result = [];
for (var i in data) result.push([data[i]]);
console.log(result); */
/* const json = data[0];
console.log(json);
//console.log(database);
let equ_name = json["NAME OF COMPANY"];
console.log(equ_name);
let isin_num = json[" ISIN NUMBER"];
console.log(isin_num);
const sql = `INSERT into equity_info (equ_name, equ_symbol, industry_id) values(${equ_name},${isin_num})`;
conn.query(sql);
 */
/* const values = [];
Object.entries(data).forEach((json) => {
  values.push(json[1]["NAME OF COMPANY"], json[1]["SYMBOL"]);
}); */

//console.log(values);
database.run(data);
