// endpoints/chatbot.js
const express = require("express");
const router = express.Router();
const conexion = require("../db");

// Endpoint para obtener todas las preguntas/respuestas del chatbot
router.get("/", (req, res) => {
  conexion.query("SELECT * FROM chatbot", (err, result) => {
    if (err) return res.status(500).json({ message: "Error al obtener chatbot", error: err });
    return res.json(result);
  });
});

module.exports = router;
