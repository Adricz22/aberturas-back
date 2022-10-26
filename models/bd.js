var mysql = require("mysql2");

var pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB_NAME,
  port: process.env.MYSQL_PORT,
});

// test connection
let sql = "SELECT * FROM novedades";
pool.execute(sql, (err, result) => {
  if (err) throw err;

  console.log("RESULT ", result);
});

module.exports = pool.promise();
