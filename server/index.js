const express = require('express');
const app = express();
const PORT = 3002;
const {User} = require("./models/User");
const bodyParser = require('body-parser')

const config = require('./key')

//APPICATION
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());


const mongoose = require('mongoose');
mongoose.connect(config.mongoURI,{
    
}).then(() => console.log('MongoDB Connect'))
  .catch(err => console.log('MongoDB DisConnect'));

app.get('/',(req,res) => res.send('hi im '));

app.post('/register', (req, res) => {
  //화원가입 필요 정보들을 client에서 가져오면 그것들을
  //DB에 넣어준다

  

  const user = new User(req.body)

  user.save((err,doc) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success:true
    })
  })
});

app.listen(PORT, ()=> console.log(`connect on port ${PORT}!`));