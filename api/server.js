const mongoose = require("mongoose");
const express = require("express");
const prueba = require("./Xchel");
const prueba2 = require("./Post");
const app = express();
const authRoute = require("./auth");
const postRoute = require("./crud");

app.use(express.json());
main();

async function main() {
  await mongoose
    .connect(
      "mongodb+srv://Doramox:DavidRules156@cluster0.spcn1.mongodb.net/blog?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(console.log("exito conectando a mongodb Atlas"))
    .catch((error) => console.log(error));
}

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

app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.use(express.urlencoded({ extended: false }));

app.listen("5000", () => {
  console.log("backend escuchando a puerto 5000");
});

/*app.get("/", async (req,res) =>{
  const articulo1 =  await prueba2.find()
console.log(articulo1)
})*/

/*run()
async function run() {
    try{
    
    const user = await prueba2.create({
      image:
            "https://conceptodefinicion.de/wp-content/uploads/2014/03/codigo-.jpg",
          title: "Articulo de prueba 3",
          desc:
            "This is a wider card natural lead-in to additional content. This content is a little bitlonger. ewrfhskcnk edesfdskjfsd sdf lorem ipsum dolor sit amed"
           }) 
   console.log(user)   
} catch (e) {
    console.log(e.message)
}}*/
