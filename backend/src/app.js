const express = require("express");
const cors = require("cors");

const app = express();
const port = 3100;

// Middlewares
app.use(cors());
app.use(express.json());

// Importar routers
const loginEndpoints = require("./endpoints/login");
const usuariosEndpoints = require("./endpoints/usuarios");

// Montar rutas
app.use("/login", loginEndpoints);
app.use("/usuarios", usuariosEndpoints);

// Servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
