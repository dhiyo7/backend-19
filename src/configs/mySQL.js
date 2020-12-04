const mySQL = require("mysql");

const { HOST, DB, USER, PASS } = process.env;

// console.log(typeof HOST);
// console.log(typeof DB);
// console.log(typeof USER);
// console.log(typeof PASS);

const db = mySQL.createConnection({
  // Setting DB
  host: HOST,
  user: USER,
  password: PASS,
  database: DB,
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database Connected");
});

module.exports = db;
