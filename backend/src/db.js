// Conexion a la base de datos
require("dotenv").config();
const mysql = require("mysql");

const conexion = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

conexion.connect((err) => {
  if (err) console.error("Error al conectar: ", err.message);
  else console.log("Conexión a MySQL exitosa");
});

module.exports = conexion;
