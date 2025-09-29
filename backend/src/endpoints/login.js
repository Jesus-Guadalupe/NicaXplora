const express = require("express");
const router = express.Router();
const conexion = require("../db");

// Endpoint de inicio de sesión
router.post("/", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Debes ingresar usuario y contraseña" });
  }

  const query = "SELECT * FROM users WHERE name = ? AND password = ?";
  conexion.query(query, [username, password], (err, result) => {
    if (err) return res.status(500).json({ message: "Error en el servidor", error: err });

    if (result.length > 0) {
      return res.status(200).json({
        id: result[0].id,
        name: result[0].name,
        email: result[0].email,
        country: result[0].country
      });
    } else {
      return res.status(401).json({ message: "Usuario o contraseña incorrectos" });
    }
  });
});

module.exports = router;
