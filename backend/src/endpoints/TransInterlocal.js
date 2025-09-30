const express = require("express");
const router = express.Router();
const conexion = require("../db");

//Endpoint para obtener todos los destinos  para la pantalla destinos
router.get("/", (req, res) => {
    conexion.query("Select * from routes", (err, result) => {
        if(err) return res.status(500).json({message:"Error al obtener los destinos", error: err});
        return res.json(result);
    });
});

module.exports = router;