const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }, 
    confirmpassword: {
        type: String,
        required: true
    }
})

const userModel = mongoose.model('user',userSchema)

module.exports = userModel


