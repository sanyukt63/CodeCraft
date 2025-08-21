const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        unique: true
    },
    confirmpassword: {
        type: String,
        unique: true
    }
})

const userModel = mongoose.model('user',userSchema)

module.exports = userModel


