const express = require('express')
const app = express()
const connectToDb = require('./config/dbconfig')
const taskRouter = require ('./router/taskRouter')
const PORT = 5000;
//connect to db

connectToDb()

app.use(express.json())
app.use('/',taskRouter)

app.listen(PORT,()=>{
    console.log('server started')
})
