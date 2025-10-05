const express = require("express");
const router = express.Router();
const conexion = require("../db");

// Obtener todas las reseñas (opcionalmente unidas con nombre del usuario y destino)
router.get("/", (req, res) => {
  const query = `
    SELECT r.id, r.user_id, u.name AS user_name, 
           r.destination_id, d.name AS destination_name, 
           r.rating, r.comment, r.created_at
    FROM reviews r
    JOIN users u ON r.user_id = u.id
    JOIN destinations d ON r.destination_id = d.id
    ORDER BY r.created_at DESC
  `;
  conexion.query(query, (err, results) => {
    if (err) return res.status(500).json({ message: "Error al obtener reseñas", error: err });
    res.json(results);
  });
});

// Obtener reseñas por destino
router.get("/destination/:destination_id", (req, res) => {
  const { destination_id } = req.params;
  const query = `
    SELECT r.id, r.user_id, u.name AS user_name, 
           r.rating, r.comment, r.created_at
    FROM reviews r
    JOIN users u ON r.user_id = u.id
    WHERE r.destination_id = ?
    ORDER BY r.created_at DESC
  `;
  conexion.query(query, [destination_id], (err, results) => {
    if (err) return res.status(500).json({ message: "Error al obtener reseñas del destino", error: err });
    res.json(results);
  });
});

// Crear una reseña
router.post("/add", (req, res) => {
  const { user_id, destination_id, rating, comment } = req.body;

  if (!user_id || !destination_id || !comment) {
    return res.status(400).json({ message: "user_id y destination_id son obligatorios" });
  }

  const query = "INSERT INTO reviews (user_id, destination_id, rating, comment) VALUES (?, ?, ?, ?)";
  conexion.query(query, [user_id, destination_id, rating || null, comment || null], (err, results) => {
    if (err) return res.status(500).json({ message: "Error al crear reseña", error: err });
    res.status(201).json({
      id: results.insertId,
      user_id,
      destination_id,
      rating,
      comment,
    });
  });
});

// Actualizar una reseña
router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { rating, comment } = req.body;

  const query = "UPDATE reviews SET rating = ?, comment = ? WHERE id = ?";
  conexion.query(query, [rating, comment, id], (err, results) => {
    if (err) return res.status(500).json({ message: "Error al actualizar reseña", error: err });
    res.json({ id, rating, comment });
  });
});

// Eliminar una reseña
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM reviews WHERE id = ?";
  conexion.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ message: "Error al eliminar reseña", error: err });
    res.json({ message: "Reseña eliminada correctamente" });
  });
});

module.exports = router;
