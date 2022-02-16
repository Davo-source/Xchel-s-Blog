const router = require("express").Router();
const xchel = require("./Xchel");

//LOGIN get, solo queremos leer y hacer el class styling
router.post("/XchelAdministrador", async (req, res) => {
  try {
    const user = await xchel.findOne({ email: req.body.email });
    !JSON.stringify(user) && res.status(400).json("Datos incorrectos");

    const Userpassword = (user) ? user.password : false;
    const password = Userpassword === req.body.password;
    !password && res.status(400).json("Datos incorrectos");

    password && user && res.status(200).json(user.email);

  } catch (error) {
    res.status(500).json(error);
  }
  
});

module.exports = router;
