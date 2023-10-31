const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
app.use(cors())

const PORT = 3000;


mongoose.connect('mongodb://localhost:27017')

app.get('/',(req,res)=>{
    res.json({message:"Server is Running"})
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });