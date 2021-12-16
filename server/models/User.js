const monoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10


const userSchema = monoose.Schema({
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

userSchema.pre('save', function (next) {
    var user = this;
    //다른게 바뀔때마다(사용자이름 혹은 비밀번호 변경시) 아래 비크립트 부분이 바뀌게 되므로 비밀번호를 바꿀때만 암호화 해야하기 때문에 안전장치
    if (user.isModified('password')) {
        //비밀번호를 암호화 시킨다.
    bcrypt.genSalt(saltRounds, function (err, salt) {
        if (err) return next(err)

        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err)
            user.password = hash
            next()
        })
    })
    }
})

const User = monoose.model('User', userSchema)

module.exports = { User }