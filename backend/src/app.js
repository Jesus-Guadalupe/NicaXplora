const express = require ("express");
const mysql = require('mysql');
const app = express();
const port = 3100;

app.use(express.json());

let conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Malumababy@Ei123',
    database: 'dbnicaxplora'
});

conexion.connect(err => {
    if(err) console.error("Error conectando: ", err.message);
    else console.log("Conexión a MySQL exitosa");
});


// Endpoint GET para ver usuarios o cualquier otro endpoint que se utilice 
app.get("/reviews", (req, res) => {
    conexion.query("SELECT * FROM reviews", (error, resultados) => {
        if(error) return res.status(500).json({ error: error.message });
        res.json(resultados);
    });
});


//Endpoint post para ingresar datos dentro de las reviews directamente a la base de datos desde postman
app.post("/reviews", (req, res) => {
    const {user_id, destination_id, rating, comment} = req.body

    //Se indica que campos se insertaran y se indica que son anonimos porque sera desde el front  
    const sql = "insert into reviews (user_id, destination_id, rating, comment) values (?,?,?,?)";
    const values = [user_id, destination_id, rating, comment];

    conexion.query(sql,values, (error, resultado) => {
        if (error) return res.status(500).json({error: error.message});

        res.status (201).json ({
            message: "Su comentario se agrego correctamente!",
            review_id: resultado.insert_id
        })
    });
});

//Endpoint para eliminar reseñas 
app.delete ("/reviews/:id", (req, res) => {
    const review_id = req.params.id;

    const sql = "Delete from reviews where id = ?"

    conexion.query(sql, [review_id], (error, resultado) => {
        if(error) return res.status(500).json({error: error.message})
            if (resultado.affectedrows === 0) {return res.status(404).json({message:"Comentario no encontrado"})};
                res.json({message:"El comentario se elimino correctamente!"})
    });
});

//Endpoint para actualizar/editar un comentario
app.put ("/reviews/:id", (req, res ) => {
    const {id} = req.params; // Id del comentario que se eliminara 
    const {rating, comment } = req.body; // Se indica las vaariable que se editaran

    const sql = "Update reviews set rating=?, comment=? where id = ?";
    const values = [rating, comment, id];

    conexion.query (sql, values, (error, resultado) => {
        if (error) return res.status(500).json({error: error.message});
            if (resultado.affectedrows === 0) {return res.status(404).json({message: "Comentario no encontrado"});}
                res.status(200).json({message: "Comentario actualizado correctamente", review_id : id});
    });
});


app.listen(port, () => {
  console.log("Servidor de node escuchando en http://localhost" + port)
});

//Este comentario es una prueba de commit para backend de NicaXplora
    