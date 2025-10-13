const express = require("express");
const cors = require("cors");

const app = express();
const port = 3100;

// Middlewares
app.use(cors());
app.use(express.json());

// Importar endpoints
const loginEndpoints = require("./endpoints/login");
const usuariosEndpoints = require("./endpoints/usuarios");
const destacadosEndpoints = require("./endpoints/destacadosHome");
const destinosEndpoints = require("./endpoints/destinos");
const TransInterlocal = require("./endpoints/TransInterlocal");
const chatbotEndpoint = require("./endpoints/chatbot");
const reviewsEndpoint = require("./endpoints/reviews");
const Transplocal = require("./endpoints/Transplocal");
const favoritosEndpoint = require("./endpoints/favoritos");

// Montar rutas
app.use("/login", loginEndpoints);
app.use("/usuarios", usuariosEndpoints);
app.use("/destacados", destacadosEndpoints);
app.use("/destinos", destinosEndpoints);
app.use("/TranspInterlocal", TransInterlocal);
app.use("/chatbot", chatbotEndpoint);
app.use("/reviews", reviewsEndpoint);
app.use("/Transplocal", Transplocal);
app.use("/favoritos", favoritosEndpoint);


// Servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:`+ port);
});
