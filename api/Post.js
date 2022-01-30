const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    desc:{
        type: String,
        required: true
    },
    imagen:{
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        inmutable: true
    },
    uptadedAt: {
        type: Date,
        default: () => Date.now()
    }
})

module.exports = mongoose.model("Post", PostSchema)