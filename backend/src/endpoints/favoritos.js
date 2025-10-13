const express = require("express");
const router = express.Router();
const conexion = require("../db"); 

// Obtener favoritos de un usuario específico
router.get("/:userId", (req, res) => {
  const { userId } = req.params; // <- Se toma el id del usuario

  const sql = `
    SELECT 
      f.id, 
      f.user_id, 
      d.id AS destination_id, 
      d.name AS destino, 
      d.image_url, 
      d.city, 
      d.description,
      d.category,
      d.activities,
      d.entry_price,
      d.opening_hours
    FROM favorites f
    JOIN destinations d ON f.destination_id = d.id
    WHERE f.user_id = ?;  -- <- filtramos por usuario
  `;

  conexion.query(sql, [userId], (err, result) => {
    if(err) return res.status(500).json({message:"Error al obtener los favoritos", error: err});
    return res.json(result);
  });
});


// Agregar destino a favoritos

router.post("/", (req, res) => {
  const { user_id, destination_id } = req.body;

  if (!user_id || !destination_id) {
    return res.status(400).json({ message: "Faltan datos requeridos" });
  }

  const sql = `INSERT INTO favorites (user_id, destination_id) VALUES (?, ?)`;

  conexion.query(sql, [user_id, destination_id], (err, result) => {
    if (err) {
      console.error("Error al agregar favorito:", err);
      return res.status(500).json({ message: "Error al agregar favorito" });
    }

    res.json({ message: "Destino agregado a favoritos correctamente", id: result.insertId });
  });
});


// Eliminar favorito

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const sql = `DELETE FROM favorites WHERE id = ?`;

  conexion.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error al eliminar favorito:", err);
      return res.status(500).json({ message: "Error al eliminar favorito" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Favorito no encontrado" });
    }

    res.json({ message: "Favorito eliminado correctamente" });
  });
});

module.exports = router;
