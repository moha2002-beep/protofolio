require("dotenv").config();
const mysql = require("mysql2");
// MySQL Database Connection
let db = null;
if (process.env.JAWSDB_URL){
  db = mysql.createConnection(process.env.JAWSDB_URL)  ;
}
else{
db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});
}
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to database.");
});

module.exports = db;
