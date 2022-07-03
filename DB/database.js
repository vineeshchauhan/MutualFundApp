const dbconnection = require("./dbconnection");
const equity_info_table = require("./tables/equity_info_table");
const isin_info_table = require("./tables/isin_info_table");

const run = async (data) => {
  connection = await dbconnection.connect();
  await isin_info_table.deleteTable(connection);
  await equity_info_table.deleteTable(connection);
  await equity_info_table.insert(connection);
  await isin_info_table.insert(connection);
  await dbconnection.disconnect();
};

module.exports = {
  run,
};
