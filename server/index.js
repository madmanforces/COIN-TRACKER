const express = require('express');
const app = express();
const PORT = 6000;
const {User} = require("./models/User");
const bodyParser = require('body-parser')

//APPICATION
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://anthony:tnswo12@cluster0.gczx3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    
}).then(() => console.log('MongoDB Connect'))
  .catch(err => console.log('MongoDB DisConnect'));

app.get('/',(req,res) => res.send('hi im dev'));

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