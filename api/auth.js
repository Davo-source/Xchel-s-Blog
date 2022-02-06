const router = require("express").Router();
const xchel = require("./Xchel");

//LOGIN get, solo queremos leer y hacer el class styling 
router.post("/XchelAdministrador", async (req,res) =>{
    try{
        const user = await xchel.findOne({email: req.body.email})
        !user && res.status(400).json("Datos incorrectos")
    
        const password = await xchel.findOne({password: req.body.password})
        !password && res.status(400).json("Datos incorrectos")

        
    }catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router