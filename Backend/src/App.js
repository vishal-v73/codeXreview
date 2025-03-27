const express=require('express');
const aiRooutes=require('./routes/ai.routes')
const cors =require("cors")
const app = express()


app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.use('/ai',aiRooutes)
module.exports= app