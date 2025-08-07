const express = require('express');
const app = express();
const connectDB = require('./config/dbconfig');
const userRoutes = require('./routes/userRoutes')
const appointmentRouter = require('./routes/appointmentRouter')
const doctorRouter = require('./routes/doctorRouter')
const patientRouter = require('./routes/patientRouter')
require('dotenv').config();

app.use(express.json());
app.use('/', userRoutes)
app.use('/appointment', appointmentRouter)
app.use('/doctor', doctorRouter)
app.use('/patient', patientRouter)


//connect to db
connectDB()

// start server

app.listen(process.env.PORT,()=>{
    console.log('Server is running on port 3000');
})