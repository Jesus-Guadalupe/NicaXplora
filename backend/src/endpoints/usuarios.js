const express = require("express");
const router = express.Router();
const conexion = require("../db");

// GET todos los usuarios
router.get("/", (req, res) => {
  conexion.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json({ message: "Error al obtener usuarios", error: err });
    res.json(results);
  });
});

// POST crear usuario
router.post("/add", (req, res) => {
  const { name, email, password, country } = req.body;
  const query = "INSERT INTO users (name, email, password, country) VALUES (?, ?, ?, ?)";
  conexion.query(query, [name, email, password, country], (err, results) => {
    if (err) return res.status(500).json({ message: "Error al crear usuario", error: err });
    res.status(201).json({ id: results.insertId, name, email, country });
  });
});

// PUT actualizar usuario
router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, password, country } = req.body;
  const query = "UPDATE users SET name = ?, email = ?, password = ?, country = ? WHERE id = ?";
  conexion.query(query, [name, email, password, country, id], (err, results) => {
    if (err) return res.status(500).json({ message: "Error al modificar usuario", error: err });
    res.json({ id, name, email, password, country });
  });
});

// DELETE usuario
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM users WHERE id = ?";
  conexion.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ message: "Error al eliminar usuario", error: err });
    res.json({ message: "Usuario eliminado correctamente" });
  });
});

module.exports = router;
