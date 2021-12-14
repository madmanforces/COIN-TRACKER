const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlenth: 50,
    },
    email: {
        type: String,
        trim: true,
        unique: 1,
    },
    lastname: {
        type: String,
        maxlenth: 50,
    },
    role: {
        type: Number,
        default:0,

    },
    image: String,
    token: {
        type: String
    },
})

const User = mongoose.model('User',userSchema)

module.exports = {User}