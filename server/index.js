const express = require('express');
const app = express();
const PORT = 3002;
const {User} = require("./models/User");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {auth} = require('./middleware/auth');
const cors = require("cors");
const session = require('express-session')
const MongoStore = require('connect-mongo');
const localsMiddleware = require('./middleware/middlewares')

const config = require('./config/key')

const corsOptions = {
  origin: true,
  credentials: true
};

//APPICATION
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(session({

  secret:'skyrocket',
  resave:false,
  saveUninitialized:false,
  store: MongoStore.create({mongoUrl:config.mongoURL}),
  cookie:{maxAge:(3.6e+6)*24} // 24시간 유효
}))
app.use(localsMiddleware);


const mongoose = require('mongoose');
mongoose.connect(config.mongoURL,{
    
}).then(() => console.log('MongoDB Connect'))
  .catch(err => console.log('MongoDB DisConnect'));

app.get('/', ( req, res ) => res.send('hi im '));

app.get('/api/hello', (req, res) => res.send('Hello World!~~ '))

app.post('/api/users/register', (req, res) => {
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

app.post('/api/users/login', (req,res) => {
  const user = User.findOne ({email: req.body.email},(err, user) => {
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
  req.session.loggedIn = true;
  req.session.user = user;
});

app.get('/api/users/auth', auth ,(req, res) => {

//여기까지 미들웨어가 잘 진행되어 통과했다면 auth가 true 라는 말
res.status(200).json({
  _id: req.user._id,
  isAdmin: req.user.role === 0 ? false : true,
  isAuth: true,
  email: req.user.email,
  nickname: req.user.name,
  role: req.user.role,
  image: req.user.image
})
})

app.get('/api/users/logout', auth, (req, res) => {
  // console.log('req.user', req.user)
  User.findOneAndUpdate({ _id: req.user._id },
    { token: "" }
    , (err, user) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true
      })
    })
})




app.listen(PORT, ()=> console.log(`connect on port ${PORT}!`));