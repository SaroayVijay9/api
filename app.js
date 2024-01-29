const express = require('express')
const mongoose = require('mongoose')
const routes = require("./routers/aliens")
const url = 'mongodb://127.0.0.1:27017/vs'

const app = express()


mongoose.connect(url)
const con = mongoose.connection

con.on('open',()=>{
    console.log('connected...')
})


 app.use('/api', routes)

app.listen(3000, ()=>{
    console.log("hello i m online")
})