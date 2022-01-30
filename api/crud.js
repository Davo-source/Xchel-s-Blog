const router = require("express").Router();
const Post = require("./Post");
const xchel = require("./Xchel");

//CREATE
router.post("/newArticle", async (req, res) => {
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
.json(saved)    }catch(error){
        res.status(500).json(error)
    }
    //Si el try es exitoso, HACER EL CLASS STYLING Y MANDAR A HOMEPAGE
})
//UPDATE
router.put("/editando/:id", async (req,res) =>{
    const user = await Post.findById(req.params.id)
        if(req.body.userId === req.params.id){
            try{

            } catch (error) {
                res.status(500).json(error)
                }
        }

})

module.exports = router