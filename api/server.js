const mongoose = require('mongoose');
const express = require('express');
const prueba = require('./Xchel')
const app = express();
const authRoute = require("./auth");
const postRoute = require("./crud")

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/Xcheldb');
  console.log('exito conectando a mongodb://localhost');
}

app.listen("3000", () =>{
    console.log("backend escuchando a puerto 3000")
})

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
app.use("/auth", authRoute)
app.use("/posts", postRoute)