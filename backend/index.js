const express = require("express");
const app = express();
const port = 3100;

app.use(express.json());

let interlocales = [
    {id: 1, origen: "Esteli", Destino: "Matagalpa", horarios: "9:00 AM", Precio: 85, duracionAproximada: "2 horas", tipoVehiculo: "Auto Bus", tipoTrayecto: "Expreso"},
    {id: 2, origen: "Esteli", Destino: "Leon", horarios: "10:00 AM", Precio: 90, duracionAproximada: "4 horas", tipoVehiculo: "Auto Bus", tipoTrayecto: "Expreso"},
    {id: 3, origen: "Esteli", Destino: "Jinotega", horarios: "8:00 AM", Precio: 80, duracionAproximada: "4 horas", tipoVehiculo: "Auto Bus", tipoTrayecto: "Expreso"},
    {id: 4, origen: "Esteli", Destino: "Matagalpa", horarios: "11:00 AM", Precio: 95, duracionAproximada: "3 horas", tipoVehiculo: "Auto Bus", tipoTrayecto: "Expreso"}
]

app.get ( "/", (req, res) => {
  return res.json(interlocales)
});

app.listen(port, () => {
  console.log("Servidor de node escuchando en http://localhost" + port)
});

//Este comentario es una prueba de commit