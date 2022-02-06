const express = require("express");
const router = express.Router();
const Post = require("./Post");
const xchel = require("./Xchel");

//CREATE
router.post("/newArticle", async (req, res) => {
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost).json(saved)
      }
    catch(error){
        res.status(500).json(error)
    }
    //Si el try es exitoso, HACER EL CLASS STYLING Y MANDAR A HOMEPAGE
})

//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const postUpdated = await Post.findByIdAndUpdate(
      req.params.id, {

        $set: {
          title: req.body.title,
          desc: req.body.desc,
          markdown: req.body.markdown,
          image: req.body.image
        }
      },
      {new: true} //para regresar uptdated
        );
    res.status(200).json(postUpdated);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET POST
router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //GET ALL POSTS
router.get("/", async (req, res) => {

    try {
      let posts  = await Post.find();
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
      try {
        await post.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }

  } catch (err) {
    res.status(500).json(err);
  }
});
  
  module.exports = router;
