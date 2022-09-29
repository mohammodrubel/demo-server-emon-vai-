const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const assetRouer = require('./router/assetRouer')
const userRouer = require('./router/userRouer')

const app = express()
app.use(cors())
dotenv.config()
app.use(express.json())

mongoose.connect(process.env.MONGODB_ACCESS,
    {useNewUrlParser:true},
    {useUnifiedTopology:true}
    )
    .then(()=> console.log('connection successfull'))
    .catch(err => console.log(err))


// Error Handeler 
function ErrorHandeler (err,req,res,next){
    if(res.headersSent){
        return err
    }
    res.status(500).json({ error:err })
}

app.use('/assetlist',assetRouer)
app.use('/user',userRouer)

app.listen(5000,()=>{
    console.log('app lisining port number 5000')
})

app.get('/',async(req,res)=>{
    res.send('hello world')
})