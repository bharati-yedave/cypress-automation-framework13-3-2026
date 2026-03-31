const sql = require("mssql");

const dbConfig = {
  user: "your_user",
  password: "your_password",
  server: "localhost", // or IP
  database: "your_db",
  port: 1433,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

async function queryDb(query) {
  try {
    let pool = await sql.connect(dbConfig);
    let result = await pool.request().query(query);
    return result.recordset;
  } catch (err) {
    console.error("DB Error:", err);
    throw err;
  }
}

module.exports = { queryDb };
