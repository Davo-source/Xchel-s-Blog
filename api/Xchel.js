const mongoose = require('mongoose');

const logInSchema = new mongoose.Schema({

    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        minlength: 10,
        required: true,
        lowercase: true
    }
})

module.exports = mongoose.model("Xchel", logInSchema)