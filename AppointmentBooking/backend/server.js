const express = require('express');
const app = express();
const connectDB = require('./config/dbconfig');
const userRoutes = require('./routes/userRoutes')
require('dotenv').config();

app.use(express.json());
app.use('/', userRoutes)


//connect to db
connectDB()

// start server

app.listen(process.env.PORT,()=>{
    console.log('Server is running on port 3000');
})