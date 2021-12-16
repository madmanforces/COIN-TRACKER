const monoose = require('mongoose')

const userSchema = monoose.Schema({
    name: {
        type: String,
        maxlength: 50,
    },
    email: {
        type: String,
        trim: true,
        unique: 1,
    },
    password: {
        type: String,
        minlength: 5,
    },
    nickname: {
        type: String,
        maxlength: 10,
        unique: 1,
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

const User = monoose.model('User',userSchema)

export default User;