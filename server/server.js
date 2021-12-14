const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://anthony:tnswo12@cluster0.gczx3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',)
  .then(()=>console.log('몽고디비 연결성공'))
  .catch(err=>console.log('에러다 다시해라'))


app.get('/', (req, res) => {
    res.send(`HELLO WORLD`);
})



app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
})
