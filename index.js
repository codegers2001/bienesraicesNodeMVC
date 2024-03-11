import express from "express";
import UsuarioRoutes from "./routes/UsuarioRoutes.js";
import  db from "./config/db.js";

// Conexión a la base de datos

db.authenticate()
  db.sync()
  .then(() => {
    console.log("Conexión a la base de datos exitosa");
  })
  .catch((error) => {
    console.log("Error de conexión a la base de datos", error);
  });

const app = express();

  // habilitar la lectura de datos en el formulario
  app.use(express.urlencoded({ extended: true }));

const port = 3000;

// habilitar el pug
app.set("view engine", "pug");
app.set("views", "./views");

// carpeta publica
app.use(express.static("public"));

app.use("/auth", UsuarioRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
