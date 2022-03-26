const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const prueba = require("./Xchel");
const prueba2 = require("./Post");
const app = express();
const authRoute = require("./auth");
const postRoute = require("./crud");

//Conexion a base de datos con mongoose

/*MALA PRACTICA HACER CODIGO DE CONEXION A BBDD AQUI,  PERO DEBIDO A QUE NO NOS PAGAN
 LO SUFICIENTE SE DECIDIO HACER MALAS PRACTICAS EN VENGANZA
*/
dotenv.config()

async function main() {
  await mongoose
    .connect(
      process.env.MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(console.log("Éxito conectando a MongoDB "))
    .catch((error) => console.log(error));
}
main();
//creacion de servidor express
app.set("port", process.env.PORT || 5000); //establecemos middleware de puerto accesible

//para que nuestra api acepte json e informacion procedente de formularios

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//definimos funciones middleware en rutas de interes

app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

//habilitamos el servidor a nuestro puerto

app.listen(app.get("port"), () => {
  console.log("backend escuchando a puerto 5000");
});

// FUNCIONES BASURA DE PRUEBA

/*creando cuenta de prueba, correr solo una vez o ESTAS DESPEDIDO
run()
async function run() {
    try{
    
    const user = await prueba.create({
        email: "dArHAt265@gmail.com",
        password: "12345"
    }) 
   console.log(user)   
} catch (e) {
    console.log(e.message)
}}*/
