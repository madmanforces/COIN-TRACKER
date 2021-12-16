const express = require('express')
const app = express()
const PORT = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://anthony:tnswo12@cluster0.gczx3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    
}).then(() => console.log('MongoDB Connect'))
  .catch(err => console.log('MongoDB DisConnect'))


app.get('/',(req,res) => res.send('hi'))

app.listen(PORT, ()=> console.log(`connect on port ${PORT}!`))