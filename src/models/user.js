const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        min: 3,
        max: 50,
        required: true
    },
    lastname: {
        type: String,
        min: 3,
        max: 50,
        required: true
    },
    email: {
        type: String,
        min: 6,
        max: 255,
        required: true
    },
    password: {
        type: String,
        min: 8,
        max: 1024,
        required: true
    },

});

module.exports = mongoose.model("User", userSchema);