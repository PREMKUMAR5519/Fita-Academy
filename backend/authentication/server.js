const express = require('express');
const app = express();

const connectDB = require('./config/dbConfig')
const userRouter = require('./router/userRouter');

app.use(express.json());
require('dotenv').config()
app.use('/',userRouter)

// Connect to the database
connectDB();


app.listen(process.env.PORT,()=>{
  console.log(`Server is running on port ${process.env.PORT}`);
})
