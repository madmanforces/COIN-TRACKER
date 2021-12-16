const express = require('express');
const app = express();
const PORT = 3002;
const {User} = require("./models/User");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require('./config/key')

//APPICATION
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());


const mongoose = require('mongoose');
const { userInfo } = require('os');
mongoose.connect(config.mongoURL,{
    
}).then(() => console.log('MongoDB Connect'))
  .catch(err => console.log('MongoDB DisConnect'));

app.get('/',(req,res) => res.send('hi im '));

app.post('/register', (req, res) => {
  //화원가입 필요 정보들을 client에서 가져오면 그것들을
  //DB에 넣어준다
  const user = new User(req.body)
  user.save((err,user) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success:true
    })
  })
});

app.post('/login', (req,res) => {
  User.findOne({email: req.body.email},(err, user) => {
    if(!user) {
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다."
      })
    }
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
      return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." })
      //비밀번호까지 맞다면 토큰을 생성하기
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        //토큰을 생성한다 어디에? -> 쿠키,로컬스토리지
      res.cookie("x_auth",user.token)
      .status(200)
      .json({ loginSuccess: true, userId: user._id})
      })
    })
  })
});




app.listen(PORT, ()=> console.log(`connect on port ${PORT}!`));